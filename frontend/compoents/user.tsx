"use client";

import React, { useState } from "react";
import { action } from "./action";

const User = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());

    if (!formValue.name || !formValue.email || !formValue.password) {
      setError(true);
      return;
    }
    setLoading(true);
    setError(false);
    try {
      await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      setLoading(false);
      action();
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      {error && (
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: "#ff0000",
            color: "#fff",
          }}
        >
          All fields are required
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className=" w-[500px] p-3 rounded-sm !bg-gray-800 flex"
        style={{
          flexDirection: "column",
          width: "500px",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={{ padding: "0.5rem", borderRadius: "0.25rem", color: "#000" }}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          style={{ padding: "0.5rem", borderRadius: "0.25rem", color: "#000" }}
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          style={{ padding: "0.5rem", borderRadius: "0.25rem", color: "#000" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            borderRadius: "0.25rem",
            cursor: "pointer",
            backgroundColor: "#4f46e5",
            color: "#fff",
          }}
          disabled={loading}
        >
          {loading ? "Loading...." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default User;
