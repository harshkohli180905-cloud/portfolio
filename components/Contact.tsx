"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


const contactCards = [
  {
    title: "Email",
    subtitle: "Let's discuss your next project",
    value: "harsh.kohli.180905@gmail.com",
    icon: Mail,
    href: "mailto:harsh.kohli.180905@gmail.com",
  },
  {
    title: "WhatsApp",
    subtitle: "Start a conversation",
    value: "+91 98916 99428",
    icon: MessageCircle,
    href: "https://wa.me/919891699428",
  },
  {
    title: "LinkedIn",
    subtitle: "View my professional profile",
    value: "Harsh Kohli",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/harsh-kohli-84223534b",
  },
];


export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);

  const [formData,setFormData] = useState({
    from_name:"",
    from_email:"",
    subject:"",
    message:"",
  });


  const [loading,setLoading] = useState(false);

  const [status,setStatus] = useState({
    type:"",
    message:"",
  });



  const handleChange = (
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  )=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };



  const handleSubmit = async(
    e:React.FormEvent
  )=>{

    e.preventDefault();

    if(!formRef.current) return;


    try{

      setLoading(true);

      await emailjs.sendForm(
        "service_f0t8rfw",
        "template_3cyn2qh",
        formRef.current,
        "w_iNOoGGj5t8RuGQl"
      );


      setFormData({
        from_name:"",
        from_email:"",
        subject:"",
        message:"",
      });


      setStatus({
        type:"success",
        message:"Message sent successfully!",
      });


    }catch{

      setStatus({
        type:"error",
        message:"Something went wrong. Please try again.",
      });


    }finally{

      setLoading(false);

    }

  };



  return (

<section
id="contact"
className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 sm:py-28 lg:px-10 lg:py-32"
>


<div className="absolute inset-0">

<div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

<div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-red-500/10 blur-[150px]" />

</div>



<div className="absolute inset-0 opacity-[0.04]">
<div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
</div>




<div className="relative mx-auto max-w-7xl">



{/* Heading */}

<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true}}
variants={fadeUp}
custom={0}
className="mb-12 text-center sm:mb-20"
>


<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs text-red-400 sm:px-5 sm:text-sm">

<Sparkles size={16}/>

LET'S CREATE SOMETHING EPIC

</div>



<h2 className="text-4xl font-black uppercase sm:text-5xl md:text-7xl">

GET IN

<span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">

TOUCH

</span>

</h2>



<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">

Have an idea, collaboration, or project in mind? I'm always open to discussing creative opportunities and exciting design work.

</p>


</motion.div>






<div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">



{/* Cards */}

<div className="space-y-5">


{contactCards.map((item,i)=>{

const Icon=item.icon;


return(

<motion.a

key={item.title}

href={item.href}

target={item.title==="Email"?"_self":"_blank"}

initial="hidden"

whileInView="visible"

viewport={{once:true}}

variants={fadeUp}

custom={i}

className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-red-600/40 sm:items-center sm:gap-5 sm:p-7"

>


<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">

<Icon size={24}/>

</div>



<div className="min-w-0">

<p className="text-xs uppercase tracking-widest text-red-400">

{item.title}

</p>


<h3 className="mt-1 break-words text-base font-bold sm:text-xl">

{item.value}

</h3>


<p className="mt-2 text-sm text-gray-400">

{item.subtitle}

</p>


</div>



<ArrowUpRight className="ml-auto hidden text-red-400 transition group-hover:rotate-45 sm:block"/>


</motion.a>

)

})}



<div className="rounded-3xl border border-red-500/20 bg-red-600/10 p-6 sm:p-8">

<h3 className="text-2xl font-black">

OPEN FOR PROJECTS

</h3>


<p className="mt-3 text-gray-400">

Brand Identity • Posters • Social Media • UI Design • Creative Direction

</p>


</div>


</div>






{/* Form */}

<motion.div

initial="hidden"

whileInView="visible"

viewport={{once:true}}

variants={fadeUp}

custom={3}

className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-8"

>


<h3 className="mb-6 text-2xl font-black uppercase sm:text-3xl">

Send Message

</h3>



<form
ref={formRef}
onSubmit={handleSubmit}
className="space-y-5"
>


{[
["Name","from_name","text"],
["Email","from_email","email"],
["Subject","subject","text"]
].map(([label,name,type])=>(

<div key={name}>

<label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">

{label}

</label>


<input

type={type}

name={name}

value={(formData as any)[name]}

onChange={handleChange}

className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-red-500"

/>


</div>

))}



<textarea

rows={5}

name="message"

value={formData.message}

onChange={handleChange}

placeholder="Tell me about your project..."

className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-red-500"

/>



<button

disabled={loading}

className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-4 text-lg font-bold uppercase transition hover:bg-red-500"

>


{loading?"Sending...":"Send Message"}

<Send size={20}/>


</button>



{status.message && (

<p className="text-center text-sm text-green-400">

{status.message}

</p>

)}


</form>



</motion.div>



</div>


</div>


</section>

);

}
