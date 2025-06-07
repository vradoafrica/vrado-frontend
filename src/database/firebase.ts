"use server"

import { db } from "@/config/firebase"
import { addDoc, collection } from "firebase/firestore"

const createUser = async (formData:{email:String,password:String})=>{
    const collectionRef = collection(db,"users")
    await addDoc(collectionRef,{
        username:formData.email,
        password:formData.password
    })
}

// const getUser = async()=>{
//     const collectionRef = collection(db,"users")
    

// }

// callbacks: {
//     async signIn({ user }) {
//       // Save user to Firestore if not exists
//       const userRef = db.collection("users").doc(user.email!);
//       const doc = await userRef.get();
//       if (!doc.exists) {
//         await userRef.set({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           createdAt: new Date(),
//         });
//       }
//       return true;
//     },


export {createUser}