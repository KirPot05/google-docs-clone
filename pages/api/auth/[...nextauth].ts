import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firebaseConfig } from "../../../utils/firebase";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter(firebaseConfig),
};

export default nextAuth(authOptions);
