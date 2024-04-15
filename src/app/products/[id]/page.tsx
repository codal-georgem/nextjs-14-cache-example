import { getProduct } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);

  if (!data?.data) {
    notFound();
  }

  return (
    <section className="container">
      <h1 className="text-2xl font-bold">{data?.data?.id}</h1>
      <p>{data?.data?.name}</p>
      <p>{data?.data?.price}</p>
    </section>
  );
}
