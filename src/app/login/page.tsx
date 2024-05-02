"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { userSchemaLogin } from "../lib/auth/userSchemaLogin";
import Link from "next/link";
import { User } from "../lib/models/User";
import { loginUser } from "../lib/auth/fetch";

export default function page() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData?.get("email")?.toString();
    const password = formData?.get("password")?.toString();

    if (!email || !password) {
      return;
    }

    const user = new User({
      email,
      password,
    });

    try {
      await userSchemaLogin.validate(user);
      const { data } = await loginUser(user);
      if (!data.ok) {
        setErrorMessage(data.msg);
      }
      if (data.accessToken) {
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        setLoading(false);
        router.push("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Error logging in user");
    }
  }

  function handleOnChange() {
    if (errorMessage) {
      setErrorMessage("");
    }
  }

  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out ps">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                    <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-orange-400 to-slate-300 bg-clip-text">
                      Welcome back
                    </h3>
                    <p className="mb-0">
                      Enter your email and password to sign in
                    </p>
                  </div>
                  <div className="flex-auto p-6">
                    <form role="form" onSubmit={handleSubmit}>
                      <label className="mb-2 ml-1 font-bold text-xs text-slate-50">
                        Email
                      </label>
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email-addon"
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                      <label className="mb-2 ml-1 font-bold text-xs text-slate-50">
                        Password
                      </label>
                      <div className="mb-4">
                        <input
                          type="password"
                          name="password"
                          className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                      <div className="w-full h-4 m-4">
                        {errorMessage ? (
                          <p className="text-red-500 text-xs">{errorMessage}</p>
                        ) : (
                          <p className=""></p>
                        )}
                      </div>
                      <div className="min-h-6 mb-0.5 block pl-12">
                        <input
                          id="rememberMe"
                          className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-50/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-50/95 checked:bg-slate-50/95 checked:bg-none checked:bg-right"
                          type="checkbox"
                        />
                        <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-50">
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-orange-400 to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
                          disabled={loading}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                    <p className="mx-auto mb-6 leading-normal text-sm">
                      Don&apos;t have an account?&nbsp;
                      <Link
                        href="/register"
                        className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-orange-400 to-slate-300 bg-clip-text"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-12 -right-40 rounded-bl-xl md:block">
                  <div className="absolute inset-x-0 top-0 right-20 z-0 h-full -ml-16 bg-[length:80%_auto] bg-center skew-x-12 bg-image-register"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
