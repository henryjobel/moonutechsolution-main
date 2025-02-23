
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome></FaHome>}]} />
      <Hero></Hero>
      
      <Grid></Grid>
  
    </div>
   </main>
  );
}
