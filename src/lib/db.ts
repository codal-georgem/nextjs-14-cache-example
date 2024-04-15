import { unstable_cache } from "next/cache";
import { sql } from "@vercel/postgres";

const db = null; // Any Database connection

export const getProduct = unstable_cache(
  async (id) => {
    // const res = await fetch("https://dummyjson.com/products");
    // const data = await res.json();
    // return data;
    try {
      const todo = await sql`SELECT * FROM Products WHERE id=${id}`;
      return { data: todo?.rows?.[0] };
    } catch (error) {
      return { data: null, error };
    }
  },
  ["products"],
  {
    tags: ["products"],
  }
);

export const getProducts = unstable_cache(
  async () => {
    try {
      const products = await sql`SELECT * FROM Products`;
      return { data: products.rows };
    } catch (error) {
      return { data: null, error };
    }
  },
  ["products"],
  {
    tags: ["products"],
    // revalidate: 60
  }
);
