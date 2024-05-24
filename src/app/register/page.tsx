"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUser } from "../lib/auth/fetch";
import { User } from "../lib/models/User";
import { userSchemaRegister } from "../lib/auth/userSchemaRegister";

export default function Page() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [pathError, setPathError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();
    const surname = formData.get("surname")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const repeatPassword = formData.get("repeatPassword")?.toString();

    if (!name || !surname || !email || !password || !repeatPassword) {
      return;
    }

    const user = new User({
      name,
      surname,
      email,
      password,
      repeatPassword,
    });

    try {
      await userSchemaRegister.validate(user);
      const response = await createUser(user);
      console.log(response);
      if (!response.ok) {
        setErrorMessage(response.msg);
      }
      if (response.ok && response.status == 201) {
        setTimeout(() => {
          router.push("/login");
          setLoading(false);
        }, 3000);
      }
    } catch ({ message }) {
      setErrorMessage(message);
    }
  }

  const handleOnChange = () => {
    if (errorMessage) {
      setErrorMessage("");
      setPathError("");
    }
  };

  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out ps">
      <section className="min-h-screen mb-32">
        <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl bg-image-register">
          <div className="container z-10">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 className="mt-12 mb-2 text-slate-50 text-3xl">
                  Welcome to{" "}
                  <span className="relative z-10 font-semibold text-transparent bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 bg-clip-text text-[40px] before:content-[''] before:absolute before:-z-10 before:bg-white before:rounded-2xl px-4 before:top-0 before:right-0 before:bottom-0 before:left-0">
                    <Link href={"/"}>TYPEWRITER!</Link>
                  </span>
                </h1>
                {/* <p className="text-xl text-slate-50">
                  Start creating and modifying content
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
              <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="px-6 pt-6 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5 className="text-slate-400">Register with</h5>
                </div>
                <div className="flex-auto p-6">
                  <form role="form text-left" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="email-addon"
                        autoComplete="name"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="surname"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Surname"
                        aria-label="Surname"
                        aria-describedby="surname-addon"
                        autoComplete="surname"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="email-addon"
                        autoComplete="email"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="password-addon"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="repeatPassword"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Repeat password"
                        aria-label="Repeat password"
                        aria-describedby="repeat-password-addon"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                    <div className="min-h-6 pl-6.92 mb-0.5 block">
                      <input
                        id="terms"
                        className="w-4.92 h-4.92 ease-soft -ml-6.92 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                        type="checkbox"
                        value=""
                      />
                      <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700">
                        {" "}
                        I agree the{" "}
                        <a href="#" className="font-bold text-slate-700">
                          Terms and Conditions
                        </a>{" "}
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
                        disabled={loading}
                      >
                        Sign up
                      </button>
                    </div>
                    <div className="w-full h-4">
                      {errorMessage ? (
                        <p className="text-red-500 text-xs">{errorMessage}</p>
                      ) : (
                        <p className=""></p>
                      )}
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-slate-700 text-sm">
                      Already have an account?{" "}
                      <Link href="/login" className="text-[#D98471] font-bold">
                        Sign in
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 flex justify-between">
        <div className="flex justify-center items-center gap-4 px-6">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="max-w-full px-3 mx-auto text-center flex-0 ">
            <p className="mb-0 text-slate-400 p-6">
              Copyright © 2024 Soft by Pablo Pedrosa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
