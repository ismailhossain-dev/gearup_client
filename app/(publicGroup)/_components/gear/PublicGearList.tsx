import { Button } from "@/components/ui/button";
import { getGears } from "../../_actions/getGears";
import GearCard from "./GearCard";
import { IGear } from "@/lib/types";

const PublicGearList = async () => {
  const result = await getGears();

  if (!result.data.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">No Gear Found</p>
    );
  }
  return (
    <div>
     <div className="mb-10 flex justify-between items-center">
         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        Discover{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
          Featured Gear
        </span>
      </h2>
      <Button className="p-5 text-white ">SHOP ALL GEAR</Button>
     </div>
      <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {result.data.map((gear: IGear) => (
          <GearCard key={gear.id} gear={gear} />
        ))}
      </div>
    </div>
  );
};

export default PublicGearList;
