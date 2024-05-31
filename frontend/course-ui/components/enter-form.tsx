"use client";
import { FormEvent, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {
  isCreatingAccount: boolean;
};

export function EnterForm({ isCreatingAccount }: Props) {
  var title;

  if (isCreatingAccount === true) {
    title = "Create account";
  } else {
    title = "Sign in";
  }

  function handleSignIn(event: FormEventHandler<HTMLButtonElement>) {}

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          Enter your email below to {title.toLowerCase()}
        </CardDescription>
      </CardHeader>
      <form>
        <CardContent className="grid gap-4">
          {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">Github</Button>
          <Button variant="outline">Google</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          </div> */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            type="submit"
            className="bg-black text-white w-full"
          >
            {title}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
