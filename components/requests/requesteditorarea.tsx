"use client";
import { useWorkspace } from "@/lib/store/workspace.store";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import KeyValueFormEditor from "./keyvalueformeditor";

type handlechangeprop = {
  key: string;
  value: string;
  enabled?: boolean;
};

const Requesteditorarea = () => {
  const {
    openedRequest,
    openedCollection,
    openedWorkspace,
    updateRequest,
    setOpendRequests,
    updateallopenedReq,
  } = useWorkspace();
  const parsedJsonValue = (jsonval?: any) => {
    if (!jsonval) return [];
    try {
      return JSON.parse(jsonval);
    } catch (error) {
      return [];
    }
  };

  const handleHeadersChange = (data: handlechangeprop[]) => {
    if (!openedCollection || !openedRequest || !openedWorkspace) return;
    const filteredItem = data.filter(
      (d) => d.enabled !== false && (d.key.trim() || d.value.trim())
    );

    const values = {
      ...openedRequest,
      headers: JSON.stringify(filteredItem),
      saved: false,
    };
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest?.id as string,
      values
    );
    updateallopenedReq(values);
    setOpendRequests(values);
  };

  const handleParametersChange = (data: handlechangeprop[]) => {
    if (!openedCollection || !openedRequest || !openedWorkspace) return;
    const filteredItem = data.filter(
      (d) => d.enabled !== false && (d.key.trim() || d.value.trim())
    );

    const values = {
      ...openedRequest,
      parameters: JSON.stringify(filteredItem),
      saved: false,
    };
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest?.id as string,
      values
    );
    updateallopenedReq(values);
    setOpendRequests(values);
  };

  const handleBodyChange = (data: { contentType: string; body: any }) => {
    if (!openedRequest) return;
    const values = {
      ...openedRequest,
      body: JSON.stringify(data.body),
      saved: true,
    };
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest?.id as string,
      values
    );
    updateallopenedReq(values);
    setOpendRequests(values);
  };

  const getParametersData = () => {
    const parsedData = parsedJsonValue(openedRequest?.parameters);
    return parsedData.length > 0
      ? parsedData
      : [{ key: "", value: "", enabled: true }];
  };

  const getHeadersData = () => {
    const parsedData = parsedJsonValue(openedRequest?.headers);
    return parsedData.length > 0
      ? parsedData
      : [{ key: "", value: "", enabled: true }];
  };

  const getBodyData = () => {
    return {
      contentType: "application/json" as const,
      body: openedRequest?.body || "",
    };
  };

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
        <KeyValueFormEditor
          initialData={getParametersData()}
          onSubmit={handleParametersChange}
          placeholder={{
            key: "Parameter Name",
            value: "Parameter Value",
            description: "URL Parameter",
          }}
        />
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
