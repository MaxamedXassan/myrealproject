// "use client"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import User from './components/User'
import CustomerList from "./components/CustomerList"
// import { useEffect, useState } from "react"
// import axios from "axios"


export default async function Home() {
  const session = await getServerSession(authOptions)


  return (
    <section>
   {/* <div>hello</div>
   <h1>server side rendered</h1>
   <pre>{JSON.stringify(session)}</pre>
   <h1>client side rendered</h1>
   <User /> */}
   <CustomerList/>
   </section>
  )
}




