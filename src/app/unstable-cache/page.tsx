import { getProduct } from "@/lib/db";

async function ProductQunatity() {
  const data = await getProduct();

  return <h1>{data?.stock}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Unstable Cache: Product</h1>
      <ProductQunatity />
    </section>
  );
}
