import { getProducts } from "@/lib/db";
import { Suspense } from "react";

async function ProductQunatity() {
  const data = await getProducts();
  return (
    <ul className="pl-10">
      {data?.data?.map((product) => (
        <li key={product?.id}>{product?.name}</li>
      ))}
    </ul>
  );
}

export default async function Products() {
  return (
    <section>
      <h1>Products</h1>
      <Suspense fallback={null}>
        <ProductQunatity />
      </Suspense>
    </section>
  );
}
