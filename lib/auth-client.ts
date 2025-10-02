import { createAuthClient } from "better-auth/react"
export const authOptions = createAuthClient({
  baseURL:`${process.env.NEXT_PUBLIC_URL}`, 
}); 

export const { signIn,signOut, useSession }= createAuthClient()