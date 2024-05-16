'use client'

import axios from "axios"
import { useState, useEffect } from "react"

interface User {
  _id: string;
  email: string;
  name: string;
  name_last: string;
  phone: string;
}

export default function ProfilePage() {
  const [data, setData] = useState<User>();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/user");
    console.log(res);
    setData(res.data.data);
  };
  return (
  <div className="border-4 border-red-900 bg-red-900 text-white rounded-md p-4 mt-16 custom-margin">
  <div className="text-center custom-text" >
  <span className="font-bold">Email:</span> {data?.email}
    </div>
  <div className="text-center custom-text">
  <span className="font-bold">Namn:</span> {data?.name} {data?.name_last}
    </div>
  <div className="text-center custom-text">
  <span className="font-bold">Telefon:</span> {data?.phone}</div>
</div>
  
);
};
