import React from 'react'
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";


const Dashboard = async () => {
  const session = await getServerSession();
  if(!session) {
    redirect("/");
  }
  return (
  <h1>

  </h1>
    
  )
}

export default Dashboard