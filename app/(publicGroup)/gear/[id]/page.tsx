import React, { Suspense } from "react";
import GearDetailsSkelaton from "../../_components/gear/details/GearDetailsSkelaton";
import GearDetailsCard from "../../_components/gear/details/GearDetailsCard";

interface GearByIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

const GearDetailsContent = async ({ params }: GearByIdPageProps) => {
  const { id } = await params;

  return <GearDetailsCard id={id} />;
};

const GearByIdPage = ({ params }: GearByIdPageProps) => {
  return (
    
      <Suspense fallback={<GearDetailsSkelaton />}>
        <GearDetailsContent params={params} />
      </Suspense>

  );
};

export default GearByIdPage;
