import { generateworkspaceIfNotExist } from "@/action/action";
import Header from "@/components/workspace/header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const WorkSpaceLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/signup");
  }     
  const workspace= await generateworkspaceIfNotExist();   

  return ( 
    <> 
    <Header user={session.user} workspace={workspace}/>
    <main className="max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden">
      <div className="flex h-full w-full">
        <div className="w-12 border-r border-zinc-800 bg-zinc-900">
          {/* <TabbedLeftPanel /> */}
        </div>
        <div className="flex-1 bg-zinc-950">{children}</div>
      </div>
    </main>
    </>
  );
};

export default WorkSpaceLayout;
