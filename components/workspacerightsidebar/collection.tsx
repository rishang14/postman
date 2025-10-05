"use client";
import { useWorkspace } from "@/lib/store/workspace.store";
import { Collection } from "@prisma/client";
import React, { useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from "../ui/resizable";
import Tabbedsidebar from "./tabbedsidebar";

const CollectionPage = ({ collection }: { collection: Collection[] }) => {
 
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={65} minSize={40}></ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel
          defaultSize={35}
          maxSize={40}
          minSize={25}
          className="flex"
        >
          <div className="flex-1">
            <Tabbedsidebar collection={collection} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default CollectionPage;
