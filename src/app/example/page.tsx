import { sql } from "@vercel/postgres";
import { AddForm } from "@/components/AddForm/AddForm";
import { DeleteForm } from "@/components/DeleteForm/DeleteForm";

export default async function Dashboard() {
  const todos = await sql`SELECT * FROM Todos`;
  console.log(todos?.rows);
  return (
    <main>
      <AddForm />
      <ul className="my-3">
        {todos?.rows?.map((todo) => (
          <li key={todo?.id} className="flex justify-between items-center my-3">
            {todo?.title}
            <DeleteForm {...todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}
