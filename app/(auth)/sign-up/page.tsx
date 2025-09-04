// import AuthForm from "@/components/AuthForm";

// const Page = () => {
    
//   return <AuthForm type="sign-up" />;
// };

// export default Page;
import AuthForm from "@/components/AuthForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-pattern">
      <div className="w-full max-w-md">
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
}