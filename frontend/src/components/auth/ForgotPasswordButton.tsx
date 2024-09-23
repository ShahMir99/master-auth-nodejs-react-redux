import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { AppDispatch } from "@/store/Store";
import { forgotPassword, setforgotPassword } from "@/store/slices/auth/recoverySlice";
import { useNavigate } from "react-router-dom";

const ForgotPasswordButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useNavigate();

  const handleForgot = () => {
    const pageKey: string = Math.floor(
      10000 + Math.random() * 90000
    ).toString();
    dispatch(setforgotPassword(pageKey));
    router(`/forgot-password?securiy_key=${pageKey}&isvalid=true`);
  };

  return (
    <Button variant="ghost" type="button" onClick={handleForgot}>
      Forgot Password
    </Button>
  );
};

export default ForgotPasswordButton;
