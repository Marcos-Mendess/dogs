import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    // aqui estamos criando o caminho da rota
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LostPassword />} />
          <Route path="reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
