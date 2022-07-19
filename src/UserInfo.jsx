import React from "react";

export const UserInfo = ({ user }) => {
  const { name, age, profession } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Profession:{profession}</p>
    </>
  ) : <p>Loading...</p>;
};
