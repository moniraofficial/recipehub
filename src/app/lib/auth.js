// import { betterAuth } from "better-auth";

// // export const auth = betterAuth({
// //   //...
// // });

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// console.log(process.env.MONGODB_URI);
// export const auth = betterAuth({
// emailAndPassword: { 
//     enabled: true, 
//   }, 

//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });

// export const auth = betterAuth({
//   //...
// });

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { inferAdditionalFields } from "better-auth/client/plugins";
// import { Plane } from "lucide-react";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// console.log(process.env.MONGODB_URI);
// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
    
//     client
//   }),
//   emailAndPassword: {
//     enabled: true
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOGLE_CLIENT_SECRET
//     }
//   },
//    user: {
//   inferAdditionalFields: {
//     role: {
//       defaultValue: "buyer"
//     },
//     Plane: {
//       defaultValue: "free"
//     }
//   }
//  }
// });


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

console.log("Database connected:", process.env.MONGODB_URI);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET // 🎯 বানান ঠিক করা হলো (GOOGLE)
    }
  },
  // 🎯 inferAdditionalFields মেইন অপশনে থাকবে, user-এর ভেতর নয়
  inferAdditionalFields: {
    user: {
      role: {
        type: "string",
        defaultValue: "user"
      },
      plan: { // 🎯 Plane থেকে বানান ঠিক করে plan করা হলো
        type: "string",
        defaultValue: "free"
      }
    }
  }
});

