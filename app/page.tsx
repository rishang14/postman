"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
export default function Home() { 
  const {data}=useSession(); 
  console.log(data,"data")
  return (
   <>
   <Button  className="cursor-pointer text-white">helo</Button>
   </>
  );
}
