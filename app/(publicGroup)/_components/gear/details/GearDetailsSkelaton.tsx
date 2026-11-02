import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GearDetailsSkeleton = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
        
        {/* Left Column: Image Skeleton */}
        <div className="space-y-4">
          <Skeleton className="w-full h-72 sm:h-80 md:h-full min-h-75 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Right Column: Content Skeleton */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Brand & Title Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 bg-neutral-200 dark:bg-neutral-800" />
              <Skeleton className="h-8 w-3/4 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Price & Stock Stats Skeleton */}
            <div className="flex items-center justify-between py-3 border-y border-neutral-100 dark:border-neutral-800">
              <Skeleton className="h-8 w-28 bg-neutral-200 dark:bg-neutral-800" />
              <Skeleton className="h-6 w-24 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-full bg-neutral-200 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Provider Section Skeleton */}
            <div className="pt-2 space-y-2">
              <Skeleton className="h-3 w-32 bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800">
                <Skeleton className="w-11 h-11 rounded-full shrink-0 bg-neutral-200 dark:bg-neutral-800" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-28 bg-neutral-200 dark:bg-neutral-800" />
                  <Skeleton className="h-3 w-44 bg-neutral-200 dark:bg-neutral-800" />
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons Skeleton */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Skeleton className="w-full sm:flex-1 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
            <Skeleton className="w-full sm:w-32 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
          </div>

        </div>

      </div>
    </Card>
  );
};

export default GearDetailsSkeleton;