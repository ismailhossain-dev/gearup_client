import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGear } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

interface GearCardProps {
  gear: IGear;
}

const GearCard = ({ gear }: GearCardProps) => {
  const { name, description, brand, image, pricePerDay, stock,id } = gear;

  return (
    <Card className="group relative w-full max-w-sm rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl dark:shadow-neutral-950/50 dark:hover:shadow-emerald-500/10 hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Image Wrapper with Zoom Effect */}
      <div className="relative w-full h-52 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        <Image
          src={image}
          alt={name || "gear image"}
          width="200"
          height="200"
          className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badge: Category or Brand */}
        {brand && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 text-xs font-mono tracking-wide shadow-sm">
            {brand}
          </span>
        )}

        {/* Rating or Stock Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-emerald-600 dark:text-emerald-400 gap-1 font-mono shadow-sm">
            <FiStar className="fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400" size={12} />
            <span>4.9</span>
          </Badge>
        </div>
      </div>

      {/* Card Header Content */}
      <CardHeader className="space-y-2 p-5">
        <CardTitle className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {name}
        </CardTitle>
        
        <CardDescription className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 leading-relaxed">
          {description}
        </CardDescription>

        {/* Price & Stock info */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 font-mono">
              ৳{pricePerDay}
            </span>
            <span className="text-neutral-500 dark:text-neutral-500 text-xs font-mono"> /day</span>
          </div>
          
          <span className="text-xs text-neutral-700 dark:text-neutral-400 font-mono bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700/50">
            Stock: {stock}
          </span>
        </div>
      </CardHeader>

      {/* Card Footer / Action Button */}
      <CardFooter className="p-5 pt-0">
        <Link href={`/gear/${id}`} className="w-full">
          <Button className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-emerald-600 text-white dark:bg-neutral-800 dark:hover:bg-emerald-500 dark:text-neutral-200 dark:hover:text-neutral-950 font-semibold tracking-wide transition-all duration-300 shadow-md border border-transparent dark:border-neutral-700/60 hover:border-emerald-600 dark:hover:border-emerald-500">
            <span>View Details</span>
            <FiArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </Link>
      </CardFooter>

    </Card>
  );
};

export default GearCard;