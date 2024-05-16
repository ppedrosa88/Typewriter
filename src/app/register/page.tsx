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
                        className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-105 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
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
                      <Link
                        href="/login"
                        className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85"
                      >
                        Sign in
                      </Link>
                    </p>
                  </form>
                  {/* <Formik
                    initialValues={initialValuesRegister}
                    validationSchema={userSchemaRegister}
                    onSubmit={handleSubmit}
                  >
                    {(values, isSubmitting) => (
                      <Form role="form text-left">
                        <div className="mb-4">
                          <input
                            type="text"
                            name="name"
                            className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="email-addon"
                            autoComplete="name"
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
                            className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-105 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                          >
                            Sign up
                          </button>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-slate-700 text-sm">
                          Already have an account?{" "}
                          <Link
                            href="/login"
                            className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-orange-400 to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85"
                          >
                            Sign in
                          </Link>
                        </p>
                      </Form>
                    )}
                  </Formik> */}
                  {/* <Form>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="email-addon"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        id="name"
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
                        value={values.surname}
                        onChange={handleChange}
                        id="surname"
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
                        value={values.email}
                        onChange={handleChange}
                        id="email"
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
                        value={values.password}
                        onChange={handleChange}
                        id="password"
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
                        value={values.repeatPassword}
                        onChange={handleChange}
                        id="repeatPassword"
                      />
                    </div>
                    <div className="min-h-6 pl-6.92 mb-0.5 block">
                      <input
                        className="w-4.92 h-4.92 ease-soft -ml-6.92 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                        type="checkbox"
                        // value={values.termsNConditions}
                        onChange={handleChange}
                        id="termsNConditions"
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
                        className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-105 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-slate-700 text-sm">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-orange-400 to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85"
                      >
                        Sign in
                      </Link>
                    </p>
                  </Form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="container">
          {/* <div className="flex flex-wrap -mx-3">
            <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Company{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                About Us{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Team{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Products{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Blog{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>
          </div> */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
              <p className="mb-0 text-slate-400">
                Copyright © 2024 Soft by Pablo Pedrosa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
