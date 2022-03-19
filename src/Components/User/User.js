import React from "react";
import { Route, Routes } from "react-router";
import { useContext } from "react";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";

const User = () => {
  const { data } = useContext(UserContext);
  console.log(data);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
