import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // await sql`DROP TABLE IF EXISTS Products;`;
    await sql`CREATE TABLE IF NOT EXISTS Products ( id  SERIAL PRIMARY KEY, name TEXT UNIQUE NOT NULL, price NUMERIC, stock NUMERIC );`;

    // if (!title || !votes) throw new Error("Title and Votes are required");

    // await sql`INSERT INTO Products (Title, Votes) VALUES (${title}, ${votes} );`;

    return NextResponse.json(
      { data: "Products Table Generated Successfully..!!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // const todos = await sql`SELECT * FROM Products;`;
}
