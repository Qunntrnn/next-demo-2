"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AppButton } from "../components/app-button";

export default function Register() {
const router = useRouter();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    try {
      if (!signInData.email) {
        alert("Please input email");
        return;
      }
      if (!signInData.password) {
        alert("Please input password");
        return;
      }
      const auth = getAuth();
      await createUserWithEmailAndPassword(
        auth, 
        signInData.email, 
        signInData.password
      );
      router.push("/");
    } catch (e) {
      alert(e.message);
      console.error(e);
    }
  };
  return (
    <div className="bg-lime-300 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="inline-block w-20">
              Email
            </label>
            <input
              className="border border-solid-300 px-3 py-2 rounded w-500 font-bold text-black"
              type="email"
              name="email"
              id="email"
              value={signInData.email}
              onChange={(e) => {
                setSignInData({
                  ...signInData,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="inline-block w-20">
              Password
            </label>
            <input
              className="border border-solid-300 px-3 py-2 rounded w-500 font-bold text-black"
              type="password"
              name="password"
              id="password"
              value={signInData.password}
              onChange={(e) => {
                setSignInData({
                  ...signInData,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <AppButton
          type="button" 
          onClick={onSubmit} 
          color="blue"
          >
            Register
          </AppButton>
        </div>
      </div>
    </div>
  );
}