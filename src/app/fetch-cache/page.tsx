
async function ProductQunatity() {
//   noStore(); remove cache
  const res = await fetch("https://dummyjson.com/products/1");
  const data: any = await res.json();

  return <h1>{data?.stock}</h1>;
}

export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <ProductQunatity />
    </section>
  );
}
