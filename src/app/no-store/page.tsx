import { getProductNoStore } from "@/lib/db";

async function ProductQunatity() {
  const data: { products: { id: number; title: string }[] } =
    await getProductNoStore();
  return (
    <ul className="pl-10">
      {data?.products?.map((product) => (
        <li key={product?.id}>{product?.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <section className="container">
      <h1 className="text-2xl font-bold">Unstable Cache: Product</h1>
      <ProductQunatity />
    </section>
  );
}
