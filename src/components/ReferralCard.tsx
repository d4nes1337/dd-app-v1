import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Share2, Copy, Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { getUserReferralInfo, getReferralStats, shareReferralLink } from '@/services/api/referralService';
import { ReferralInfo, ReferralStats } from '@/services/api/types';

interface ReferralCardProps {
  className?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({ className }) => {
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data: referralInfo, refetch: refetchReferralInfo } = useQuery({
    queryKey: ['referralInfo'],
    queryFn: () => getUserReferralInfo(),
    staleTime: 60 * 1000, // 1 minute
    retry: 1,
    retryDelay: 1000,
  });

  const { data: referralStats, refetch: refetchStats } = useQuery({
    queryKey: ['referralStats'],
    queryFn: () => getReferralStats(),
    staleTime: 60 * 1000, // 1 minute
    retry: 1,
    retryDelay: 1000,
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        await Promise.all([
          refetchReferralInfo(),
          refetchStats()
        ]);
      } catch (error) {
        console.error('Error loading referral data:', error);
        setLoadError('Failed to load referral information');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [refetchReferralInfo, refetchStats]);

  const handleShare = async () => {
    if (!referralInfo) return;
    await shareReferralLink(referralInfo);
  };

  const handleCopyLink = async () => {
    if (!referralInfo) return;
    try {
      await navigator.clipboard.writeText(referralInfo.telegram_deep_link);
      toast.success('Referral link copied to clipboard');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast.error('Failed to copy referral link');
    }
  };

  const handleRetry = () => {
    setIsLoading(true);
    setLoadError(null);
    Promise.all([
      refetchReferralInfo(),
      refetchStats()
    ]).finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return (
      <div className={`p-4 text-center ${className}`}>
        <Loader2 className="animate-spin mx-auto h-6 w-6 text-telegram-blue" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Loading referral information...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className={`p-4 text-center ${className}`}>
        <p className="text-sm text-red-600 dark:text-red-400 mb-2">{loadError}</p>
        <button
          onClick={handleRetry}
          className="inline-flex items-center text-sm text-telegram-blue hover:text-telegram-dark"
        >
          <RefreshCw className="mr-1 h-4 w-4" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Referral Link Section */}
      <div className="p-4 bg-telegram-secondary-bg rounded-lg">
        <h3 className="text-sm font-medium mb-2">Your Referral Link</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={referralInfo?.telegram_deep_link || ''}
            className="flex-1 p-2 text-sm bg-white dark:bg-sidebar-primary/30 border border-gray-300 dark:border-gray-700 rounded-md"
          />
          <button
            onClick={handleCopyLink}
            className="p-2 text-telegram-blue hover:text-telegram-dark"
            title="Copy link"
          >
            <Copy size={18} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 text-telegram-blue hover:text-telegram-dark"
            title="Share link"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Referrals List Section */}
      <div className="p-4 bg-telegram-secondary-bg rounded-lg">
        <h3 className="text-sm font-medium mb-2">Your Referrals</h3>
        {referralStats?.referred_users && referralStats.referred_users.length > 0 ? (
          <div className="space-y-2">
            {referralStats.referred_users.map((user) => (
              <div key={user.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">
                  {user.username ? `@${user.username}` : `User ${user.id}`}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Joined {new Date(user.joined_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No referrals yet. Share your link to start earning rewards!
          </p>
        )}
      </div>
    </div>
  );
};

export default ReferralCard; 