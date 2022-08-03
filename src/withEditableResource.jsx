import React, { useState, useEffect } from "react";

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await (await fetch(resourcePath)).json();
        setData(response);
        setOriginalData(response);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const respone = await fetch(resourcePath, {
        method: "POST",
        headers: "Content-Type",
        body: JSON.stringify({[resourceName]: data}),
      });
      setOriginalData(respone);
      setData(respone);
    };

    const onReset = () => {
      setData(originalData);
    };

    return (
      <Component
        {...props}
        user={user}
        onChange={onChange}
        onSave={onSave}
        onReset={onReset}
      />
    );
  };
};
