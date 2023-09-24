"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const UsersPage = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState({});

  const getCurrent = async () => {
    const { data } = await axios("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    setUsers(data);
  };

  useEffect(() => {
    if (session) {
      getCurrent();
    }
  }, [session]);
  return (
    <>
      {/* @ts-ignore */}
      {/* {users?.data.map((user: any) => {
        <div key={user.id}>user.name</div>;
      })} */}
    </>
  );
};

export default UsersPage;
