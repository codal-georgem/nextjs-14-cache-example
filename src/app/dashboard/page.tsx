import Link from "next/link";
import { Suspense } from "react";
import Products from "../products/page";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

export default async function Dashboard() {
  const createProduct = async (formData: FormData) => {
    "use server"; 
    
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const stock = 1;
    // console.log("values", name, price, stock);
    await sql`INSERT INTO Products (name, price, stock) VALUES (${name}, ${price}, ${stock});`;

    revalidateTag("products");
  };
  return (
    <section>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <Link href="/no-store">All Products</Link>
      <Suspense fallback={null}>
        <Products />
      </Suspense>
      <form action={createProduct}>
        <input name="name" />
        <input name="price" type="number" />
        <button type="submit">Create</button>
      </form>
    </section>
  );
}
