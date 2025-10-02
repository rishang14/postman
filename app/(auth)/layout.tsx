import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => { 
    "use server"
  const session = await auth.api.getSession({
    headers: await headers(),
  });


   console.log("session",session)
  if (session) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default AuthLayout;
