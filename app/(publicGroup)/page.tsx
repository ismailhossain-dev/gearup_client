import Hero from "@/components/home/Hero";
import PublicGearList from "./_components/gear/PublicGearList";
import { Suspense } from "react";

const RootHomePage = () => {
  return (
    <div className=" ">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Suspense fallback={"Loding.."}>
          <PublicGearList />
        </Suspense>
      </section>
    </div>
  );
};

export default RootHomePage;
