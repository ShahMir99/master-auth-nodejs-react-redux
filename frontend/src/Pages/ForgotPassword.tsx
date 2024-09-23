import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/Store";
import { forgotPassword, resetPassword } from "@/store/slices/auth/recoverySlice";

export type ResetPasswordFormType = {
  otp: string;
  password: string;
  confirmPassword: string;
};

const ForgotPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isEmailSent } = useSelector((state: RootState) => state.recoverySlice);
  
  const [email, setEmail] = useState("");
  const [form, setForm] = useState<ResetPasswordFormType>({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnchange = (e: any) => {
    if (!e.target) {
      setForm((state) => ({
        ...state,
        otp: e,
      }));
    } else {
      setForm((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleResetPassword = () => {
    dispatch(resetPassword(form));
  };

  const handleSendEmail = () => {
    dispatch(forgotPassword(email));
  };

  return (
    <div className="h-full flex items-center justify-center">
      {isEmailSent ? (
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-neutral-900">
              Reset Password
            </CardTitle>
            <CardDescription className="text-sm text-center text-neutral-600 font-normal">
              Enter the varification code that we sent to your email account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <InputOTP
                  maxLength={9}
                  value={form.otp}
                  name="inputOpt"
                  onChange={(e) => handleOnchange(e)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">password :</Label>
                    <Input
                      id="password"
                      name="password"
                      onChange={handleOnchange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirm-password">Confirm password :</Label>
                    <Input
                      id="confirm-password"
                      name="confirmPassword"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="submit"
              onClick={handleResetPassword}
              variant="custom"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Set New Password"}
              
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-neutral-900">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-sm text-center text-neutral-600 font-normal">
              Don't worry! It happens. Please enter the email adress associated
              with your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email :</Label>
                  <Input id="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="custom"
              className="w-full"
              onClick={handleSendEmail}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
export default ForgotPassword;
