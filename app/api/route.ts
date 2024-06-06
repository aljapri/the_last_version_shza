import NodeMailerSender from "@/services/nodemailer";
import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: Request, res: NextApiResponse) {
  const {email,subject,message} = await req.json();
 try{
 const NodeSender = new NodeMailerSender(
   email,subject,message
 );
await NodeSender.sendMessage();
return NextResponse.json({ message: "success" });
 }catch(err){

 }
}

// import NodeMailerSender from "../nodemailer"

// export const sendMessage = async({email,subject,message}:{email:string,subject:string,message:string})=>{
//     try{
//         const NodeSender = new NodeMailerSender(email,subject,message);
//         await NodeSender.sendMessage();
//         console.log("success")
//         return "success"
//     }catch(err){
//         return "fail"
//     }
// }
