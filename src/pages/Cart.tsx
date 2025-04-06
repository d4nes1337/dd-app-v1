import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Loader2, Coins } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import ClientInfoForm from '@/components/ClientInfoForm';
import CartItem from '@/components/CartItem/CartItem';
import { toast } from 'sonner';
import { createStockOrder } from '@/services/api/orderService';
import { checkClientInformation, getClientInfo } from '@/services/api/clientService';
import { getTelegramUser } from '@/services/api/userService';
import PromocodeInput from '@/components/PromocodeInput';
import { Promocode } from '@/services/api/promocodeService';
import { DeliveryRate } from '@/services/api/types';
import { getDDCoinsBalance } from '@/services/api/userService';

const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [isCheckingClientInfo, setIsCheckingClientInfo] = useState(false);
  const [showClientInfoForm, setShowClientInfoForm] = useState(false);
  const [currentPromocode, setCurrentPromocode] = useState<Promocode | undefined>();
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [ddCoinsBalance, setDDCoinsBalance] = useState<number>(0);
  const [ddCoinsToUse, setDDCoinsToUse] = useState<number>(0);
  const [isLoadingDDCoins, setIsLoadingDDCoins] = useState<boolean>(false);
  const [selectedDeliveryRate, setSelectedDeliveryRate] = useState<DeliveryRate | null>(null);
  const [clientInfo, setClientInfo] = useState<{ email: string; phone_number: string; address: string } | null>(null);
  
  // Fetch DD coins balance when component mounts
  useEffect(() => {
    const fetchDDCoins = async () => {
      const user = getTelegramUser();
      if (!user) return;
      
      setIsLoadingDDCoins(true);
      try {
        const balance = await getDDCoinsBalance();
        setDDCoinsBalance(balance);
      } catch (error) {
        console.error('Error fetching DD coins balance:', error);
      } finally {
        setIsLoadingDDCoins(false);
      }
    };
    
    fetchDDCoins();
  }, []);
  
  // Calculate total price whenever cart items or promocode changes
  useEffect(() => {
    const subtotal = items.reduce((sum, item) => sum + (item.sale_price || item.price) * item.quantity, 0);
    if (currentPromocode) {
      // Apply fixed discount first (only once for the whole order)
      let discountedPrice = subtotal;
      if (currentPromocode.discount_fixed) {
        discountedPrice = Math.max(0, discountedPrice - currentPromocode.discount_fixed);
      }
      // Then apply percentage discount
      if (currentPromocode.discount_percent && currentPromocode.discount_percent !== 'null') {
        const percentageDiscount = (discountedPrice * parseFloat(currentPromocode.discount_percent)) / 100;
        discountedPrice = Math.max(0, discountedPrice - percentageDiscount);
      }
      
      // Add delivery price if a delivery rate is selected
      if (selectedDeliveryRate) {
        discountedPrice += selectedDeliveryRate.price_rub;
      }
      
      setFinalPrice(Math.round(discountedPrice));
    } else {
      let calculatedPrice = subtotal;
      
      // Add delivery price if a delivery rate is selected
      if (selectedDeliveryRate) {
        calculatedPrice += selectedDeliveryRate.price_rub;
      }
      
      setFinalPrice(calculatedPrice);
    }
    
    // Reset DD coins to use if price has changed
    setDDCoinsToUse(0);
  }, [items, currentPromocode, selectedDeliveryRate]);

  // Calculate the maximum amount of DD coins that can be used (50% of final price)
  const maxDDCoinsToUse = Math.min(
    ddCoinsBalance,
    Math.floor(finalPrice * 0.5)
  );
  
  // Calculate the final price after DD coins
  const finalPriceAfterDDCoins = finalPrice - ddCoinsToUse;
  
  // Handle DD coins slider change
  const handleDDCoinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setDDCoinsToUse(value);
  };

  const handlePromocodeApplied = (promocode: Promocode, discountedPrice: number) => {
    setCurrentPromocode(promocode);
    setFinalPrice(Math.round(discountedPrice));
  };

  const handlePromocodeRemoved = () => {
    setCurrentPromocode(undefined);
    setFinalPrice(items.reduce((sum, item) => sum + (item.sale_price || item.price) * item.quantity, 0));
  };

  const handleCreateOrder = async () => {
    try {
      setIsCreatingOrder(true);
      
      if (items.length === 0) {
        toast.error('Your cart is empty!');
        setIsCreatingOrder(false);
        return;
      }
      
      const telegramUser = getTelegramUser();
      if (!telegramUser) {
        toast.error('Please log in to create an order');
        setIsCreatingOrder(false);
        return;
      }

      // Get client information and show form to review/update
      try {
        const info = await getClientInfo();
        // Store client info for the form
        setClientInfo(info ? {
          email: info.email || '',
          phone_number: info.phone_number || '',
          address: info.address || ''
        } : null);
        
        setShowClientInfoForm(true);
        setIsCreatingOrder(false);
      } catch (error) {
        console.error('Error getting client information:', error);
        toast.error('Failed to get client information');
        setIsCreatingOrder(false);
      }
    } catch (error: any) {
      console.error('Error in order creation process:', error);
      toast.error(`Error: ${error.message}`);
      setIsCreatingOrder(false);
    }
  };
  
  // Handle client info form completion
  const handleClientInfoComplete = (deliveryRate?: DeliveryRate) => {
    setShowClientInfoForm(false);
    if (deliveryRate) {
      setSelectedDeliveryRate(deliveryRate);
    }
    createOrderWithInfo();
  };

  // Separate function to create order after client info is confirmed
  const createOrderWithInfo = async () => {
    try {
      setIsCreatingOrder(true);
      
      const telegramUser = getTelegramUser();
      if (!telegramUser) {
        toast.error('Please log in to create an order');
        return;
      }

      // Create an order using the API endpoint
      const orderData = {
        telegram_user_id: telegramUser.id,
        delivery_method: selectedDeliveryRate?.delivery_type || 'self_pickup',
        delivery_address: clientInfo?.address || '',
        promocode_text: currentPromocode?.promocode_text,
        dd_coins_amount: ddCoinsToUse,
        items: items.map(item => ({
          sku: item.productId,
          size: item.size,
          quantity: item.quantity,
          sale_price: item.sale_price || item.price
        }))
      };

      console.log('Creating order with data:', JSON.stringify(orderData));
      
      const response = await createStockOrder(orderData);
      
      if (response.success) {
        clearCart();
        toast.success('Order created successfully');
      } else {
        toast.error(response.message || 'Failed to create order');
      }
    } catch (error: any) {
      console.error('Error creating order:', error);
      toast.error(`Error creating order: ${error.message}`);
    } finally {
      setIsCreatingOrder(false);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Your cart is empty</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Add some items to your cart to continue shopping
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center text-sm font-medium text-telegram-blue hover:text-telegram-dark"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue shopping
            </Link>
          </div>
        ) : (
          <div>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.size}`}
                  item={item}
                  onRemove={() => removeFromCart(item.productId, item.size)}
                />
              ))}
            </div>
            
            {/* Promocode Input */}
            <div className="bg-white dark:bg-sidebar-accent rounded-lg p-4 shadow-sm mb-6">
              <h3 className="text-sm font-medium mb-2">Have a promocode?</h3>
              <PromocodeInput
                originalPrice={items.reduce((sum, item) => sum + (item.sale_price || item.price) * item.quantity, 0)}
                onPromocodeApplied={handlePromocodeApplied}
                onPromocodeRemoved={handlePromocodeRemoved}
                currentPromocode={currentPromocode}
              />
            </div>
            
            {/* Order Summary */}
            <div className="bg-white dark:bg-sidebar-accent rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span>₽{items.reduce((sum, item) => sum + (item.sale_price || item.price) * item.quantity, 0)}</span>
                </div>
                
                {selectedDeliveryRate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Delivery ({selectedDeliveryRate.delivery_type === 'self_pickup' 
                        ? 'Self Pickup' 
                        : selectedDeliveryRate.delivery_type === 'courier'
                          ? 'Courier'
                          : 'Shipping'})
                    </span>
                    <span>
                      {selectedDeliveryRate.price_rub > 0 
                        ? `₽${selectedDeliveryRate.price_rub.toLocaleString()}`
                        : 'Free'}
                    </span>
                  </div>
                )}
                
                {currentPromocode && (
                  <div className="flex justify-between text-telegram-blue">
                    <span>Promocode Discount</span>
                    <span>
                      {currentPromocode.discount_fixed ? 
                        `-₽${currentPromocode.discount_fixed}` : 
                        (currentPromocode.discount_percent && currentPromocode.discount_percent !== 'null') ? 
                          `-${currentPromocode.discount_percent}%` : 
                          ''
                      }
                    </span>
                  </div>
                )}
                
                {/* DD Coins Section */}
                {ddCoinsBalance > 0 && finalPrice > 0 && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Coins size={16} className="text-yellow-500" />
                        <span className="font-medium">DD Coins</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Balance: {ddCoinsBalance}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Use DD Coins for payment</span>
                        <span className="text-telegram-blue">{ddCoinsToUse} coins (-₽{ddCoinsToUse})</span>
                      </div>
                      
                      <input
                        type="range"
                        min="0"
                        max={maxDDCoinsToUse}
                        value={ddCoinsToUse}
                        onChange={handleDDCoinsChange}
                        className="w-full"
                        disabled={maxDDCoinsToUse <= 0}
                      />
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>Max: {maxDDCoinsToUse} coins (50% of total)</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between font-medium pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span>Total</span>
                  <span>₽{finalPriceAfterDDCoins}</span>
                </div>
              </div>
              <button
                onClick={handleCreateOrder}
                disabled={isCreatingOrder || isCheckingClientInfo}
                className="w-full mt-4 bg-telegram-blue text-white py-3 rounded-lg font-medium hover:bg-telegram-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreatingOrder || isCheckingClientInfo ? (
                  <>
                    <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                    {isCheckingClientInfo ? 'Checking Info...' : 'Creating Order...'}
                  </>
                ) : (
                  'Create Order'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Client Info Form */}
      {showClientInfoForm && (
        <ClientInfoForm
          onComplete={handleClientInfoComplete}
          onCancel={() => setShowClientInfoForm(false)}
          clientInfo={clientInfo}
        />
      )}
    </PageLayout>
  );
};

export default Cart;
