"use server"

import clientPromise from "@/lib/mongodb";

  export const fetchuser = async (Username) => {
    const clint = await clientPromise;
    const db = clint.db("Linktree");
    const collection = db.collection("Links");

    const doc  = await collection.findOne({username: Username})

    if(!doc){
      return JSON.parse(JSON.stringify({success:'false', error:'true', message: 'username nor exist', result: null }))
   
    }
    else{
      return JSON.parse(JSON.stringify({success:'true', error:'false', message: 'user found', result: doc }))
    }
}

export const fetchloginuser = async (Username) => {
    const clint = await clientPromise;
    const db = clint.db("Linktree");
    const collection = db.collection("Login");

    const doc  = await collection.findOne({username: Username})

    if(!doc){
      return JSON.parse(JSON.stringify({success:'false', error:'true', message: 'username nor exist', result: null }))
   
    }
    else{
      return JSON.parse(JSON.stringify({success:'true', error:'false', message: 'user found', result: doc }))
    }
}