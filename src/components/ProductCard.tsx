import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getConsistentEmoji } from '@/utils/emojiUtils';
import { sortSizes } from '@/utils/sizeUtils';
import { cn } from '@/lib/utils';
import { StockItem } from '@/services/api';
import { hapticImpact } from '@/utils/telegramUtils';
import { scrollToTop } from '@/utils/scrollUtils';

interface ProductCardProps {
  product: StockItem;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const navigate = useNavigate();
  
  // Get a consistent emoji based on the product name and color
  const productEmoji = getConsistentEmoji(`${product.item_name}-${product.color_code}`, 'product');
  
  // Get available sizes from the new format (array of SizeAvailability)
  const availableSizes = Array.isArray(product.sizes) 
    ? sortSizes(product.sizes.filter(size => size.quantity > 0).map(size => size.size))
    : [];

  // Check if product has photos
  const hasPhoto = product.photos && product.photos.length > 0;
  
  // Get the front photo URL (or first available)
  const getPhotoUrl = () => {
    if (!hasPhoto) return '';
    
    // Try to find a 'front' photo first
    const frontPhoto = product.photos!.find(photo => 
      photo.photo_category === 'front' && photo.photo_url);
    
    // If no front photo, use the first photo
    return frontPhoto 
      ? frontPhoto.photo_url 
      : product.photos![0].photo_url;
  };
  
  // Handle click with haptic feedback
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Trigger medium impact haptic feedback
    hapticImpact('medium');
    
    // Force scroll to top immediately before navigation
    scrollToTop();
    
    // Navigate to product details
    navigate(`/product/${product.sku}`);
    
    // Try scrolling again after navigation with delays
    [50, 100, 200].forEach(delay => {
      setTimeout(scrollToTop, delay);
    });
  };
  
  return (
    <Link 
      to={`/product/${product.sku}`} 
      onClick={handleClick}
      className={cn(
        'block bg-telegram-secondary-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-lift',
        className
      )}
    >
      <div className="aspect-square bg-telegram-bg flex items-center justify-center">
        {hasPhoto ? (
          <img 
            src={getPhotoUrl()} 
            alt={product.item_name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-5xl animate-float">${productEmoji}</span>`;
            }}
          />
        ) : (
          <span className="text-5xl animate-float">{productEmoji}</span>
        )}
      </div>
      
      <div className="p-4 min-h-[120px] flex flex-col justify-between">
        <div className="mb-2">
          <div className="mb-1">
            <h3 className="font-medium text-telegram-text break-words line-clamp-2">
              {product.brand} {product.item_name}
            </h3>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-telegram-button">
              {typeof product.price_rub === 'string' 
                ? parseFloat(product.price_rub).toLocaleString() 
                : product.price_rub.toLocaleString()}₽
            </span>
            {product.color_hex && (
              <div 
                className="w-3 h-3 rounded-full border border-gray-300" 
                style={{ backgroundColor: product.color_hex }}
              />
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {availableSizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full">
                {size}
              </span>
            ))}
            {availableSizes.length > 3 && (
              <span className="text-xs px-2 py-1 bg-telegram-bg text-telegram-text rounded-full">
                +{availableSizes.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
