import Head from "next/head";
import Image from "next/image";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ls from "local-storage";
import { useMounted } from "@/components/Hooks/useMounted";

function Login() {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") != null ? ls("users") : [];
  let { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load effect", users);
  }, []);

  console.log("declared users", users);
  const selectUser = (id) => {
    ls("activeUID", id);
    router.push("/");
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((users) => {
        return (
          <div
            onClick={() => selectUser(users.id)}
            className="login-user__user-box"
            key={users.id}
          >
            <img
              className="login-user__user-img"
              src="https://randomuser.me/api/portraits/women/30.jpg"
            />
            <div className="login-user__user-name">{users.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/create");
  };
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">Who Is Watching?</span>
        </div>

        <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>

        <div className="login-user__buttons">
          <button className="login-user__kid" onClick={createUser}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
