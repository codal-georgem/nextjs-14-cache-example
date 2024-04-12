import { cache } from "react";

const getProduct = cache(async (id: number) => {
  console.log("getProduct", id);
  return {
    id,
    name: "Apple",
  };
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
