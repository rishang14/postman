import { getCollections } from "@/action/action";
import CollectionPage from "@/components/workspacerightsidebar/collection";
import React from "react";

const Homepage = async ({ searchParams }: any) => {
  const { wid } = await searchParams;
  

  if(!wid)return;   
  
  const collections= await getCollections(wid);  
  return <CollectionPage collection={collections} />;
};

export default Homepage;
