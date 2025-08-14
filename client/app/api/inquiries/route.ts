// app/api/inquiries/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import type { OkPacket } from "mysql2";

export async function POST(request: Request) {
  try {
    const { name, email, project_details } = await request.json();
    const [result] = await db
      .promise()
      .query<OkPacket>(
        "INSERT INTO inquiries (name, email, project_details) VALUES (?, ?, ?)",
        [name, email, project_details]
      );
    return NextResponse.json(
      { message: "Inquiry submitted successfully!", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiries API Error:", error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
