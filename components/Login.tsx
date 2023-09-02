import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-5 py-2">
      <Image
        src="https://www.dignited.com/wp-content/uploads/2020/04/Google-Docs-Header-1280x720-1-1024x576.png"
        height={300}
        width={500}
        objectFit="contain"
        alt=""
      />
      <Button
        className="w-48 text-sm"
        onClick={() => signIn("google")}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {" "}
        LOGIN{" "}
      </Button>
    </div>
  );
}

export default Login;
