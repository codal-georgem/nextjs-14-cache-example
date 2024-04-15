import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   const client = await db.connect();
  //   console.log(client);
  const title = "Lets do it";
  const votes = 1;
  try {
    // await sql`DROP TABLE Todos`; // Delete Table
    // await sql`CREATE TABLE IF NOT EXISTS Todos ( ID  SERIAL PRIMARY KEY, Title varchar(255), Votes varchar(255) );`;
    await sql`CREATE TABLE IF NOT EXISTS Todos ( id  SERIAL PRIMARY KEY, title TEXT UNIQUE NOT NULL );`;

    // if (!title || !votes) throw new Error("Title and Votes are required");

    // await sql`INSERT INTO Todos (Title, Votes) VALUES (${title}, ${votes});`;
    const todos = await sql`SELECT * FROM Todos;`;
    return NextResponse.json({ todos: todos?.rows ?? [] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // const todos = await sql`SELECT * FROM Todos;`;
  // return NextResponse.json({ todos: todos?.rows ?? [] }, { status: 200 });
}
