"use client";

import { deleteTodo } from "@/actions/form-actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";

const initialState = {
  message: "",
  isError: false,
};

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending}>
      Delete
    </Button>
  );
}

export function DeleteForm({ id, title }: { id?: number; title?: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" id="id" name="id" value={id} />
      <input type="hidden" id="todo" name="todo" value={title} />
      <DeleteButton />
      <Label aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </Label>
    </form>
  );
}
