import { getAllrequest, getCollections } from "@/action/action";
import CollectionPage from "@/components/workspacerightsidebar/collection";
import { Requests } from "@prisma/client";
import React from "react";
import { string } from "zod";

const Homepage = async ({ searchParams }: any) => {
  const { wid } = await searchParams;

  if (!wid) return;

  const collections = await getCollections(wid);

  let requests: Map<string, Requests[] | []> = new Map<
    string,
    Requests[] | []
  >();

  if (collections) {
    for (const items of collections) {
      const data = await getAllrequest(items.id);
      requests.set(items.id, data);
    }
  }
  console.log(requests, "all requests ");

  return <CollectionPage collection={collections} requestslist={requests} />;
};

export default Homepage;
