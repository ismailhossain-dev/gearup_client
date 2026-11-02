
// import { getMe } from "@/service/getMe";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import React from "react";

const PublicGroupLayout = async({ children }: { children: React.ReactNode }) => {
    // const user = await getMe();
    // console.log("Public user ", user)
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default PublicGroupLayout;