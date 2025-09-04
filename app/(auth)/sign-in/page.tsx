// import AuthForm from "@/components/AuthForm";

// const Page = () => {
//   return <AuthForm type="sign-in" />;
// };

// export default Page;
// /app/sign-in/page.tsx
// /app/sign-in/page.tsx
import AuthForm from "@/components/AuthForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-pattern">
      <div className="w-full max-w-md">
        <AuthForm type="sign-in" />
      </div>
    </div>
  );
}
