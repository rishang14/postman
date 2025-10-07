"use client";
import { useWorkspace } from "@/lib/store/workspace.store";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Requesteditorarea = () => {
  const { openedRequest } = useWorkspace();

  if (!openedRequest) return null;
  return (
    <Tabs
      defaultValue="parameters"
      className="bg-zinc-900 rounded-md w-full px-4 py-4"
    >
      <TabsList className="bg-zinc-800 rounded-t-md">
        <TabsTrigger value="parameters" className="flex-1">
          Parameters
        </TabsTrigger>
        <TabsTrigger value="headers" className="flex-1">
          Headers
        </TabsTrigger>
        <TabsTrigger value="body" className="flex-1">
          Body
        </TabsTrigger>
      </TabsList>

      <TabsContent value="parameters">
        {/* <KeyValueFormEditor
        //   initialData={getParametersData()}
        //   onSubmit={handleParametersChange}
          placeholder={{
            key: "Parameter Name",
            value: "Parameter Value",
            description: "URL Parameter",
          }}
        /> */}
      </TabsContent>

      <TabsContent value="headers">
        {/* <KeyValueFormEditor
          initialData={getHeadersData()}
          onSubmit={handleHeadersChange}
          placeholder={{
            key: "Header Name",
            value: "Header Value",
            description: "HTTP Header",
          }}
        /> */}
      </TabsContent>

      <TabsContent value="body">
        {/* <BodyEditor 
          initialData={getBodyData()}
          onSubmit={handleBodyChange} 
        /> */}
      </TabsContent>
    </Tabs>
  );
};

export default Requesteditorarea;
