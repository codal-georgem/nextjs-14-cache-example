import { sql } from "@vercel/postgres";
import { cache } from "react";

const getProduct = cache(async (id: number) => {
  console.log("getProducts", id);
  const data = await sql`SELECT * FROM Products WHERE id=${id}`;
  return data?.rows?.[0];
});

export async function generateMetaData() {
  const product = await getProduct(1);
  return {
    title: product?.name,
  };
}

export default async function Page() {
  const product = await getProduct(1);
  return (
    <section>
      <h1>{product?.name}</h1>
    </section>
  );
}
