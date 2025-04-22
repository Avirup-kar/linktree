import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/mongodb"
import NextAuth from "next-auth/next"
const authOptions = {
providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      const { email, password } = credentials;
      console.log(email, password)
      try {
        const clint = await clientPromise;
        const db = clint.db("Linktree");
        const collection = db.collection("Login");
    
        // Find user by email
        const doc = await collection.findOne({ email: email });
        console.log("User found:", doc.password);
        console.log("User document:", doc);
        if (!doc) {
          console.log("No user found with this email");
          return null;
        }
    
        // Compare passwords
        // const isValidPassword = await bcrypt.compare(password, doc.password);
        // console.log("Password valid:", isValidPassword);
        if (password !== doc.password) {
          console.log("Invalid password");
          return null;
        }
    
        // Return user data
        return { id: doc._id, email: doc.email, name: doc.username };
      } catch (error) {
        console.error("Error in authorize function:", error);
        return null;
      }
    }
  })
],
session: {
  strategy: 'jwt',
},
secret: process.env.NEXTAUTH_SECRET,
// pages: {
//   signIn: '/generate',
// },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }