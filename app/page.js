"use client"
import Link from "next/link";
import { useSession } from "next-auth/react"
import { useState } from "react";

export default function Home(){
  const{data:session} = useSession()
  
  return(
    <div>
      {session ? User({session}): Guest()}
    </div>
  )
}


//Guest
function Guest(){
  return(
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={'/Login'}><p className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray">Sign In</p></Link>
      </div>
    </main>
  )
}

//authorize user

function User({session}){
  return(
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">Sign Out</button>
      </div>

      <div className="flex justify-center">
        <Link href={'/profile'}><p className="mt-5 px-10 py-1 rounded-sm bg-indigo-500">Profile Page</p></Link>
      </div>
    </main>
  )
}