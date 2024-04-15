"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const createTodo = async (
  prevState: {
    message: string;
    isError: boolean;
  },
  formData: FormData
) => {
  const todo = formData.get("todo") as string;

  if (!todo) {
    return { message: "Failed to create todo", isError: true };
  }

  try {
    // await sql`CREATE TABLE IF NOT EXISTS Todos ( id  SERIAL PRIMARY KEY, title TEXT UNIQUE NOT NULL );`;
    await sql`INSERT INTO Todos (title) VALUES (${todo})`;

    revalidatePath("/exercise");

    return { message: `Added todo ${todo}`, isError: false };
  } catch (error) {
    return { message: `Something went wrong OR Already in the list : ${todo}`, isError: true };
  }
};

export const deleteTodo = async (
  prevState: {
    message: string;
    isError: boolean;
  },
  formData: FormData
) => {
  const id = formData.get("id") as string;
  console.log(id);
  try {
    await sql`DELETE FROM Todos WHERE id=${id};`;

    revalidatePath("/exercise");

    return { message: `Deleted todo ${id}`, isError: false };
  } catch (error) {
    return { message: `Failed to delete ${id}`, isError: true };
  }
};
