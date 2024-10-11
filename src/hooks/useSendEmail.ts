import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from "react-phone-number-input"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser';
// import { Env } from "@/config/constants";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z.string().email(),
  description: z.string().min(1).max(1000)
})

export const useSendEmail = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      phone: '',
      email: '',
      description: ''
    }
  })
  const sendEmail = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS_PUB_KEY as string)
      await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string, { ...values })
      form.reset()
      window.location.pathname = '/thanks'
    } catch (err) { console.error(err) }
  }
  return { form, sendEmail }
}

