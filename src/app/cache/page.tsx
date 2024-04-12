import { cookies } from "next/headers";
import React from "react";

export default function Page() {
  cookies(); // headers(), noStore()
  return (
    <section>
      <h1>App Router</h1>
      <p>{Date.now()}</p>
    </section>
  );
}
