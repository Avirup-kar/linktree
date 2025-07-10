"use server"

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const clint = await clientPromise;
    const db = clint.db("Linktree");
    const collection = db.collection("Login");

    const doc  = await collection.findOne({username: body.username})
    const doc1 = await collection.findOne({email: body.email})

    if(doc){
      return NextResponse.json({success:'false', error:'true', message: 'Already exist this username choose different!'})
    }
    if(doc1){
      return NextResponse.json({success:'false', error:'true', message: 'Already exist this email choose different! or alredy have an account with this email please login'})
    }

   const result =  await collection.insertOne(body)
    return NextResponse.json({success:'true', error:'false', message: 'save your data'})
  }