"use client";
import React from "react";
import { Collection, Requests } from "@prisma/client";
import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from "../ui/resizable";
import Tabbedsidebar from "./tabbedsidebar";
import Requestplayground from "../requests/requestplayground";

export type collectionpageprop = {
  collection: Collection[];
  requestslist: Map<string, Requests[] | []>;
};

const CollectionPage = ({ collection, requestslist }: collectionpageprop) => { 
  return (  
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={65} minSize={40}>
          <Requestplayground />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel
          defaultSize={35}
          maxSize={40}
          minSize={25}
          className="flex"
        >
          <div className="flex-1">
            <Tabbedsidebar
              collection={collection}
              requestslist={requestslist}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default CollectionPage;
