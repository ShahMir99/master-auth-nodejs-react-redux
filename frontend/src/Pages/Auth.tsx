import LoginComponent from "@/components/auth/login";
import SignUp from "@/components/auth/sign-up";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <div className="flex justify-center pt-20">
      <Tabs defaultValue="signup" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
        <TabsContent value="login">
          <LoginComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
