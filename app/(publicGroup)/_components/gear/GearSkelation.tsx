import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const GearSkeletonCard = () => {
  return (
    <Card className="w-full max-w-sm mx-auto rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-md flex flex-col justify-between">
      
      {/* Image Skeleton */}
      <div className="relative w-full h-52 bg-neutral-100 dark:bg-neutral-950">
        <Skeleton className="w-full h-full bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Card Header Skeleton */}
      <CardHeader className="space-y-3 p-5">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 bg-neutral-200 dark:bg-neutral-800" />

        {/* Description Skeleton (2 Lines) */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full bg-neutral-200 dark:bg-neutral-800" />
          <Skeleton className="h-4 w-2/3 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Price & Stock Skeleton */}
        <div className="pt-3 flex items-center justify-between">
          <Skeleton className="h-6 w-20 bg-neutral-200 dark:bg-neutral-800" />
          <Skeleton className="h-6 w-16 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </CardHeader>

      {/* Card Footer Button Skeleton */}
      <CardFooter className="p-5 pt-0">
        <Skeleton className="w-full h-11 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
      </CardFooter>

    </Card>
  );
};

interface GearSkeletonProps {
  count?: number;
}

const GearSkeleton = ({ count = 8 }: GearSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <GearSkeletonCard key={index} />
      ))}
    </div>
  );
};

export default GearSkeleton;