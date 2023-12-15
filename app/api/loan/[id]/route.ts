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
      const loan = await prisma.loan.findUnique({ where: {id} });
      if (!loan)
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      return NextResponse.json({ message: "Success", loan }, { status: 200 });
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
      const { title, price } = await req.json();
      await main();
      const loan = await prisma.loan.update({
        data: { title, price },
        where: { id },
      });
      return NextResponse.json({ message: "Success", loan }, { status: 200 });
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
      const loan = await prisma.loan.delete({ where: { id } });
      return NextResponse.json({ message: "Success", loan }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };