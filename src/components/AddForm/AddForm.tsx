"use client";

import { createTodo } from "@/actions/form-actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const initialState = {
  message: "",
  isError: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="w-full"
    >
      Add
    </Button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);
  console.log(state);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Enter Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-8">
          <Input
            placeholder="Enter todo here"
            type="text"
            id="todo"
            name="todo"
            required
          />
          <SubmitButton />
          <Label
            className={`mt-8 ${state?.isError ? "text-red-500" : "text-green-900"}`}
          >
            {state?.message}
          </Label>
        </form>
      </CardContent>
    </Card>
  );
}
