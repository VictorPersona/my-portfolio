import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY)

export  async function  POST(request:Request){
    const body = request.json()
    try{
        const { data, error } = await resend.emails.send({
          from: 'Website <onboarding@resend.dev>',
          to:['gauravtupe00@gmail.com'],
          subject:"Hello",
          react:EmailTemplate({name:'Jhon',email:"jd",message:"jda"}),
        })
        if(error){
            return Response.json({error},{status:500});
        }
        return Response.json(data);
    }
    catch(error){
        return Response.json({error},{status:500})
    }
    
}