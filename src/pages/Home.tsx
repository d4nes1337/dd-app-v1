import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import UserAvatar from '@/components/UserAvatar';
import { Banner, BannerSlider } from '@/components/Banner';
import { useUser } from '@/contexts/UserContext';
import { getRandomBannerEmoji } from '@/utils/emojiUtils';
import { getTelegramUser, initTelegramWebApp, hapticSelection } from '@/utils/telegramUtils';

const Home: React.FC = () => {
  const { username, displayName, telegramUser, avatarEmoji, updateTelegramUser } = useUser();
  const navigate = useNavigate();

  // Initialize Telegram WebApp and get user data
  useEffect(() => {
    const initTelegram = async () => {
      try {
        // Initialize Telegram WebApp
        initTelegramWebApp();
        
        // Get Telegram user data
        const user = getTelegramUser();
        if (user) {
          console.log('Telegram user found on Home page:', user);
          // Update the user context with Telegram user data
          updateTelegramUser(user);
        }
      } catch (error) {
        console.error('Error initializing Telegram on Home page:', error);
      }
    };
    
    initTelegram();
  }, [updateTelegramUser]);

  // Banner data
  const banners = [
    {
      title: 'SPRING SALE',
      emoji: getRandomBannerEmoji(),
      color: 'bg-telegram-blue dark:bg-telegram-dark'
    },
    {
      title: 'NEW ARRIVALS',
      emoji: getRandomBannerEmoji(),
      color: 'bg-indigo-500 dark:bg-indigo-900/80'
    },
    {
      title: 'EXCLUSIVE DEALS',
      emoji: getRandomBannerEmoji(),
      color: 'bg-violet-500 dark:bg-violet-900/80'
    }
  ];

  // Get the display username - prioritize Telegram username if available
  const displayUsername = telegramUser?.username || username;
  
  // Handle profile click with haptic feedback
  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Trigger selection haptic feedback
    hapticSelection();
    
    // Navigate to profile page
    navigate('/profile');
  };

  return (
    <PageLayout fullHeight className="p-4">
      <header className="mb-6">
        {/* User profile section - clickable to navigate to profile */}
        <Link to="/profile" className="flex items-center gap-3 hover:opacity-90 transition-opacity" onClick={handleProfileClick}>
          <UserAvatar 
            user={telegramUser}
            emoji={avatarEmoji} 
            size="md" 
            className="hover-lift"
          />
          <div>
            <h1 className="text-2xl font-semibold">Welcome, {displayName}</h1>
            {displayUsername && (
              <p className="text-gray-600 dark:text-gray-400">
                @{displayUsername}
              </p>
            )}
          </div>
        </Link>
      </header>

      <section className="mb-8 animate-slide-up">
        <BannerSlider banners={banners} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">Featured Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-telegram-light dark:bg-sidebar-accent/50 rounded-lg p-6 text-center hover-lift">
            <span className="text-3xl">👕</span>
            <h3 className="mt-2 font-medium">Clothing</h3>
          </div>
          <div className="bg-telegram-light dark:bg-sidebar-accent/50 rounded-lg p-6 text-center hover-lift">
            <span className="text-3xl">👟</span>
            <h3 className="mt-2 font-medium">Footwear</h3>
          </div>
          <div className="bg-telegram-light dark:bg-sidebar-accent/50 rounded-lg p-6 text-center hover-lift">
            <span className="text-3xl">🧢</span>
            <h3 className="mt-2 font-medium">Accessories</h3>
          </div>
          <div className="bg-telegram-light dark:bg-sidebar-accent/50 rounded-lg p-6 text-center hover-lift">
            <span className="text-3xl">🎒</span>
            <h3 className="mt-2 font-medium">Bags</h3>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4">Latest News</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-sidebar-accent/50 p-4 rounded-lg shadow-sm animate-slide-up">
            <h3 className="font-medium">New Collection Arriving Soon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get ready for our summer collection dropping next week!</p>
          </div>
          <div className="bg-white dark:bg-sidebar-accent/50 p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-medium">Free Shipping Weekend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enjoy free shipping on all orders this weekend</p>
          </div>
          <div className="bg-white dark:bg-sidebar-accent/50 p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-medium">Member Exclusive Discounts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Members get 15% off all accessories this month</p>
          </div>
          <div className="bg-white dark:bg-sidebar-accent/50 p-4 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-medium">New Store Opening</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Visit our new flagship store in Moscow starting June 1st</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
