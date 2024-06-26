import { getProducts } from "@/lib/db";
import { sql } from "@vercel/postgres";
// import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";

async function Products() {
  // noStore();
  // const data = await sql`SELECT * FROM Products`;
  const data = await getProducts();
  return (
    <ul className="pl-10">
      {data?.data?.map((product) => (
        <li key={product?.id}>{product?.name}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <section className="container">
      <h1 className="text-2xl font-bold">Product</h1>
      <Suspense fallback={null}>
        <Products />
      </Suspense>
    </section>
  );
}
