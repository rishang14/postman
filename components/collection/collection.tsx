"use client"
import { useWorkspace } from '@/lib/store/workspace.store'
import React from 'react'

const CollectionPage = () => { 
    const {openedWorkspace,setCollection,workspaces}=useWorkspace(); 


  return (
    <div>CollectionPage</div>
  )
}

export default CollectionPage