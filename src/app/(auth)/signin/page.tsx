"use client";

import { useForm, Controller } from "react-hook-form";
import { Divider } from "antd";

import LogoAlt from "@/images/logo_alt.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";

const SignInPage = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  // const { login, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit(async (values: any) => {
    // Disabled backend integration:
    // try {
    //   await login({ email: values.email, password: values.password });
    // } catch (e) {}
    router.push("/welcome-screen");
  });

  return (
    <div>
      <main className="h-screen">
        <div className="w-full min-h-screen flex items-center justify-center px-5 sm:px-0">
          <div className="w-full max-w-[640px]">
            <Image
              src={LogoAlt}
              quality={100}
              width={1000}
              height={1000}
              alt="plangenie logo"
              className="mx-auto w-[113px] mb-3 h-auto"
            />
            <div className="border border-solid border-[#66666680] max-w-[640px] px-5 sm:px-[40px] pt-[30px] pb-[40px] rounded-[24px] bg-white">
              <div className="text-3xl text-center mb-10 font-medium text-[#333333]">
                Sign in
              </div>
              <form onSubmit={onSubmit}>
                <div className="mb-4 form-group">
                  <label htmlFor="" className="opacity-90 mb-1 block">
                    Email or mobile phone number
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        className="border border-solid border-[#66666680]"
                      />
                    )}
                  />
                </div>
                <div className="form-group mb-6">
                  <div className="mb-1 flex items-center justify-between">
                    <label htmlFor="" className="opacity-90 mb-1 block">
                      Your password
                    </label>
                    <div className="">
                      {showPassword ? (
                        <div
                          onClick={() => setShowPassword(false)}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <IoMdEyeOff />
                          <p className="text-sm">Hide</p>
                        </div>
                      ) : (
                        <div
                          onClick={() => setShowPassword(true)}
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <IoMdEye />
                          <p className="text-sm">Show</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="border border-solid border-[#66666680]"
                      />
                    )}
                  />
                </div>
                <Button type="submit" className="bg-primary w-full py-7 rounded-full mb-5">
                  Log In
                </Button>
                <p className="text-sm text-center mb-8">
                  By continuing, you agree to the{" "}
                  <Link
                    href="/"
                    className="border-b border-solid border-[#111111]"
                  >
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/"
                    className="border-b border-solid border-[#111111]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  .
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href=""
                    className="border-b border-solid text-sm border-[#111111]"
                  >
                    Other issues with sign in
                  </Link>
                  <Link
                    href=""
                    className="border-b border-solid text-sm border-[#111111]"
                  >
                    Forgot your password
                  </Link>
                </div>
              </form>
            </div>
            <div>
              <Divider>New to our community</Divider>
              <Link href="/signup" className="bg-transparent border border-solid border-black w-full py-5 rounded-full mb-5 text-black block text-center text-base mt-10">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
