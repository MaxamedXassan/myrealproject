import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";



export const GET = async function (req: Request, 
    {params}: {params: {id: String}}) {
    try {
    //   const id = req.url.split("/blog/")[1];
    const id = params.id;
      await main();
      const customer = await prisma.customer.findUnique({ where: {id} });
      if (!customer)
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      return NextResponse.json({ message: "Success", customer }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };



  
export const PUT = async function (req: Request, 
    {params}: {params: {id: String}})  {
    try {
      const id = params.id;
      const { name, number } = await req.json();
      await main();
      const customer = await prisma.customer.update({
        data: { name, number },
        where: { id },
      });
      return NextResponse.json({ message: "Success", customer }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };



  export const DELETE = async (req: Request, 
    {params}: {params: {id: String}}) => {
    try {
     const id = params.id
      await main();
      const customer = await prisma.customer.delete({ where: { id } });
      return NextResponse.json({ message: "Success", customer }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };