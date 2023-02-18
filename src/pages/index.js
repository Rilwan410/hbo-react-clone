import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useStateContext } from "../components/HBOProvider";
import Login from "@/components/UI/Login/Login";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) {
      router.push("/create");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
