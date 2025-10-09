"use client";
import { useWorkspace } from "@/lib/store/workspace.store";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { updateRequest as updatereq } from "@/action/action";
import KeyValueFormEditor from "./keyvalueformeditor";
import BodyEditor from "./bodyeditor";
import { Button } from "../ui/button";
import { toast } from "sonner";

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
  if (!openedRequest) return null;

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
      values, 
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
    if (!openedRequest || !openedCollection || !openedWorkspace) return;
    const values = {
      ...openedRequest,
      body: data.body,
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

  const SaveReq = async () => {
    // setIspending(true);
    const updatedReq = await updatereq({ ...openedRequest, saved: true });
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest.id,
      {
        ...openedRequest,
        saved: true, 
       
      }
    );
    setOpendRequests({ ...openedRequest, saved: true });
    updateallopenedReq({ ...openedRequest, saved: true });
    toast.success("Congratulations", {
      duration: 3000,
      description: "Your request is updated successfully",
    });
    // setIspending(false);
  };
  
  console.log(openedRequest.response,"values of response")
  return (
    <Tabs
      defaultValue="parameters"
      className="bg-zinc-900 rounded-md w-full px-4 py-4"
    >
      <div className=" w-full flex justify-between items-center py-3">
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
        <Button disabled={openedRequest.url.length < 5} className=" text-white bg-indigo-400" onClick={SaveReq}>Save Requests</Button>
      </div>
      <TabsContent value="parameters">
        <KeyValueFormEditor
          initialData={getParametersData()}
          onSubmit={handleParametersChange}
          placeholder={{
            key: "Parameter Name",
            value: "Parameter Value",
            description: "URL Parameter",
          }}
          values="Parameters"
        />
      </TabsContent>

      <TabsContent value="headers">
        <KeyValueFormEditor
          initialData={getHeadersData()}
          onSubmit={handleHeadersChange}
          placeholder={{
            key: "Header Name",
            value: "Header Value",
            description: "HTTP Header",
          }}
          values="Headers"
        />
      </TabsContent>

      <TabsContent value="body">
        <BodyEditor initialData={getBodyData()} onSubmit={handleBodyChange} />
      </TabsContent>
    </Tabs>
  );
};

export default Requesteditorarea;
