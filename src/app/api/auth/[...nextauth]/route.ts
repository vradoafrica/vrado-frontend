import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { db } from "@/config/firebase";
import Credentials from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
     
    }),
   
    // Credentials({
    //   async authorize(credentials, req) {
    //     const res = await fetch("/your/endpoint", {
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { "Content-Type": "application/json" }
    //     })
    //     const user = await res.json()
    //   }
    // })
  ], 
  session:{
    strategy:"jwt"
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }},
  pages: {
    signIn: "/login", // Optional: your custom sign-in page
  },
  
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export {handler as GET,handler as POST}