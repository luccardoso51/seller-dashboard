
"use client"

import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Home() {

const router = useRouter()

  return (
  <div>
   <p>Root page</p>
   <Button onClick={()=> router.push("/dashboard")} size="default">
      <Paperclip/> 
      <p>Go to dashboard</p>
    </Button>
   </div>
  );
}
