'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Desc = () => {
  return (
         <section className="py-16 lg:py-24 px-6 lg:px-20 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           viewport={{ once: true }}
          className="max-w-3xl w-full text-center items-center lg:text-left lg:items-start mx-auto flex flex-col gap-8"
        >

          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">KVE Partner Program</h2>
          <div className="flex flex-col gap-6 text-lg text-neutral-700 leading-relaxed w-full">
            <p>
              We at KVE believe in collaboration. We believe that together we are stronger. Within the KVPP Partner
              Program, we share the experience and insight we have gained in welding for over 70 years in the industry
              with our dealers and distributors to build an even more strategic relationship with mutual success.
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-neutral-900">What is KVPP?</h3>
              <p>
                KVPP is KVE's global Partner Program. It is targeted to strengthen the strategic partnerships between KVE
                and its dealers and distributors, and to put emphasis on the importance of value-based selling within our
                valuable network. The members of KVPP will have access to our extensive knowledge in welding and welding
                safety to support profitable sales growth. Furthermore, our partners will enjoy numerous benefits such as
                early access on new products, availability prioritization, and extended technical support.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-neutral-900">Why KVPP?</h3>
              <p>
                KVE is a globally renowned brand in welding and welding safety, and we are especially recognized in the
                industry for our broad knowledge. We understand the needs of a welder and continuously work to develop
                innovative solutions to deliver the best possible welding experience. Sharing our knowledge will add value
                to your sales. Within KVPP you will have a chance to use all the knowledge we have in welding – to make us
                even stronger together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Desc