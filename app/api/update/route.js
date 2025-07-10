import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, bio, profilepic, links, handel } = body;

    if (!username) {
      return NextResponse.json({ success: false, message: "Username is required" });
    }

    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("Links");

    // Update the user's data
    const result = await collection.updateOne(
      { username },
      {
        $set: {
          bio,
          profilepic,
          links,
          handel,
        },
      },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      result,
    });
  } catch (error) {
    console.error("Error in /api/update:", error);
    return NextResponse.json({ success: false, message: "Internal server error" });
  }
}