import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await sql`UPDATE Products SET price=${20}
    WHERE id='1'`;

  revalidateTag("products");
  return new Response("Success!");
}
