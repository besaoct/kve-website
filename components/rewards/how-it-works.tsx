"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"

const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your free KVE Rewards account in seconds",
    icon: '/images/rewards/join.svg'
  },
  {
    step: "2", 
    title: "Shop & Earn",
    description: "Earn 1 point for every $1 spent on qualifying purchases",
    icon: '/images/rewards/earn.svg'
  },
  {
    step: "3",
    title: "Redeem Rewards",
    description: "Use your points for discounts, exclusive products, and special offers",
    icon: '/images/rewards/redeem.svg'
  }
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
     <div className="w-full">
          <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Start earning rewards in three simple steps
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center mx-auto justify-center w-full gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center w-full"
            >
   
              <div className="text-4xl mb-4 w-full mx-auto flex  justify-center items-center">
                <Image
                src={step.icon}
                alt="" width={100} height={100}
                className="w-12 h-12"

                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>

     </div>

       <div className="flex flex-col gap-12 lg:gap-32 w-full">
             <div className="flex flex-wrap lg:flex-row-reverse gap-8 justify-between items-center w-full">
              <div className="md:flex-1 ">
                <Image src={'/images/rewards/earn-ways.webp'} width={100} height={100} alt=""
                className="object-cover w-full h-auto "
               />
              </div>
              <div className="flex flex-col gap-2 max-w-md w-full  lg:max-w-1/2">
                 <h1 className="text-3xl">Earn points for every order placed</h1>
                 <p>The more you spend, the more you save.</p>
                 <Button className="w-fit mt-4">
                   Ways to earn
                 </Button>
              </div>
            </div>

             <div className="flex flex-wrap gap-8 justify-between items-center w-full">
            <div className="md:flex-1 ">
                <Image src={'/images/rewards/redeem-ways.webp'} width={100} height={100} alt=""
                className="object-cover w-full"
               />
              </div>
              <div className="flex flex-col gap-2 max-w-md w-full lg:max-w-1/2">
                 <h1 className="text-3xl">Redeem points for rewards</h1>
                 <p>Redeem points on your next purchase, or save them up for higher value rewards.</p>
                 <Button className="w-fit mt-4">
                   Ways to redeem
                 </Button>
              </div>
            </div>
       </div>

     <p className="text-center">
      *Excludes taxes and shipping. Rewards points are applied after all discounts.
     </p>
      </div>
    </section>
  )
}