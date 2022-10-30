import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen py-2 space-y-5">
      <Image
        src="https://www.dignited.com/wp-content/uploads/2020/04/Google-Docs-Header-1280x720-1-1024x576.png"
        height={300}
        width={500}
        objectFit="contain"
        alt=""
      />
      <Button className="w-48 text-sm" onClick={() => signIn("google")}>
        {" "}
        LOGIN{" "}
      </Button>
    </div>
  );
}

export default Login;
