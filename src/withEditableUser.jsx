import React, { useState, useEffect } from "react";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setUserOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await (await fetch(`/users/${userId}`)).json();
        setUser(response);
        setUserOriginalUser(response);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const respone = await fetch(`/users/${userId}`, {
        method: "POST",
        headers: "Content-Type",
        body: JSON.stringify(user),
      });
      setUserOriginalUser(respone);
      setUser(respone);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
