import { clearError, SignUpUser } from "@/store/slices/auth/authSlice"
import { AppDispatch, RootState } from "@/store/Store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export type formDataType = {
  [key: string]: string;
};

const SignUp = () => {
  const { isLoading, submitError } = useSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SignUpUser(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (submitError) {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  }, [submitError]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create new Account.</CardTitle>
          <CardDescription>
            Let's get started with your new account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <Button variant="custom" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Create new"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUp;
