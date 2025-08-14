// This is the complete code for: app/api/services/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import type { OkPacket, RowDataPacket } from "mysql2";

export async function GET() {
  try {
    const [rows] = await db
      .promise()
      .query<RowDataPacket[]>("SELECT * FROM services ORDER BY id DESC");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { message: "DB Error fetching services" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, description, price_range, features } = await request.json();
    const featuresJson = JSON.stringify(features); // Convert features array to a JSON string

    const [result] = await db
      .promise()
      .query<OkPacket>(
        "INSERT INTO services (name, description, price_range, features) VALUES (?, ?, ?, ?)",
        [name, description, price_range, featuresJson]
      );

    return NextResponse.json(
      { message: "Service added successfully", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "DB Error adding service" },
      { status: 500 }
    );
  }
}
