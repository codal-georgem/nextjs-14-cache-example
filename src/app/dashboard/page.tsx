import Link from "next/link";
import { Suspense } from "react";
import Products from "../products/page";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Dashboard() {
  const createProduct = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const stock = 1;
    // console.log("values", name, price, stock);
    await sql`INSERT INTO Products (name, price, stock) VALUES (${name}, ${price}, ${stock});`;
    
    formData.delete("name");
    formData.delete("price");

    revalidateTag("products");
  };
  return (
    <section>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <Link
        href="/no-store"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        All Products
      </Link>
      <Suspense fallback={null}>
        <Products />
      </Suspense>
      <form action={createProduct} className="space-y-8">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <Input
              id="name"
              name="name"
              required
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              required
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter value"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 w-full"
        >
          Create
        </Button>
      </form>
    </section>
  );
}
