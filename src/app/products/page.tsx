import { getProducts } from "@/lib/db";
import { Suspense } from "react";

async function ProductQunatity() {
  const data = await getProducts();
  return (
    <ul className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
      {data?.data?.map((product) => (
        <li
          key={product?.id}
          className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
        >
          {product?.name}
        </li>
      ))}
    </ul>
  );
}

export default async function Products() {
  return (
    <section>
      <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Products
      </h1>
      <Suspense fallback={null}>
        <ProductQunatity />
      </Suspense>
    </section>
  );
}
