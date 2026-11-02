import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getGearyById } from "@/app/(publicGroup)/_actions/getGearById";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiXCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiShoppingBag,
} from "react-icons/fi";

const GearDetailsCard = async ({ id }: { id: string }) => {
  const result = await getGearyById({ id });
  const gear = result?.data;

  if (!gear) {
    return (
      <div className="p-8 text-center text-neutral-500 font-mono">
        Gear details not found.
      </div>
    );
  }

  const {
    name,
    description,
    brand,
    image,
    pricePerDay,
    stock,
    availableStock,
    isAvailable,
    user: provider,
    category,
  } = gear;

  return (
    <Card className="w-full max-w-4xl mx-auto rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
        
        {/* Left Column: Image Section */}
        <div className="space-y-4">
          <div className="relative w-full h-72 sm:h-80 md:h-full min-h-[300px] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
            <Image
              src={image}
              alt={name || "Gear Image"}
              fill
              priority
              className="object-cover"
            />
            
            {/* Top Category Badge */}
            {category?.name && (
              <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium shadow-sm">
                {category.name}
              </span>
            )}

            {/* Availability Badge */}
            <div className="absolute top-4 right-4">
              <Badge
                variant="secondary"
                className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs shadow-sm backdrop-blur-md ${
                  isAvailable
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                    : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30"
                }`}
              >
                {isAvailable ? (
                  <>
                    <FiCheckCircle size={14} /> Available
                  </>
                ) : (
                  <>
                    <FiXCircle size={14} /> Out of Stock
                  </>
                )}
              </Badge>
            </div>
          </div>
        </div>

        {/* Right Column: Gear Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Brand & Title */}
            <div>
              {brand && (
                <p className="text-xs uppercase font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                  {brand}
                </p>
              )}
              <CardTitle className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                {name}
              </CardTitle>
            </div>

            {/* Price & Stock Stats */}
            <div className="flex items-baseline gap-2 py-2 border-y border-neutral-100 dark:border-neutral-800">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 font-mono">
                ৳{pricePerDay}
              </span>
              <span className="text-neutral-500 text-sm font-mono">/ day</span>

              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700/60">
                  Stock: <strong>{availableStock}</strong> / {stock}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-mono">
                Description
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Provider / Owner Details */}
            {provider && (
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-mono mb-2.5">
                  Rented By (Provider)
                </h4>
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
                    {provider.profilePhoto ? (
                      <Image
                        src={provider.profilePhoto}
                        alt={provider.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-500">
                        <FiUser size={20} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                      {provider.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                      {provider.email && (
                        <span className="flex items-center gap-1 truncate">
                          <FiMail size={12} /> {provider.email}
                        </span>
                      )}
                      {provider.phone && (
                        <span className="flex items-center gap-1">
                          <FiPhone size={12} /> {provider.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Button
              disabled={!isAvailable || availableStock === 0}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-neutral-950 font-bold tracking-wide transition-all shadow-lg shadow-emerald-600/20 dark:shadow-emerald-500/20 disabled:opacity-50"
            >
              <FiShoppingBag size={18} />
              <span>{isAvailable ? "Book This Gear" : "Not Available"}</span>
            </Button>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full py-6 rounded-xl border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold"
              >
                Contact Owner
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </Card>
  );
};

export default GearDetailsCard;