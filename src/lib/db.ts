import { unstable_cache } from "next/cache";

const db = null; // Any Database connection

export const getProductNoStore = unstable_cache(
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  },
  ["products"],
  {
    tags: ["products"],
  }
);

export const getProduct = unstable_cache(
  async () => {
    // return db.select().from[products].where(eq(products.id, id));
    return {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
    };
  },
  ["products"],
  {
    tags: ["products"],
  }
);
