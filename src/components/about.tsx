import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center text-white">
      <div className="">
        <Image 
          src="/vb-party.svg" 
          width={500}
          height={0}
          alt="logo" />
      </div>
      <div className="text-center md:text-left mt-12 md:mt-0">
        <p>
          <span className="text-yellow-300 font-mono"> Vault-Tec </span>
          is a corporation specializing in defense, originally based out 
          of Los Angeles, California. Following the success of our Vault™ 
          demonstrations, we've happily expanded into Boston, MA, as well as 
          Washington D.C.
          <br /><br />
          The primary focus of 
          <span className="text-yellow-300 font-mono"> Vault-Tec </span> 
          is the development of a line of nuclear war defense installations and the 
          technology necessary for their construction. 
          <span className="text-yellow-300 font-mono"> Vault-Tec </span> combines functionality 
          and safety in all of our endeavors, and practical applications prove the 
          necessity of our line of products.
          <br /><br />
          Prepare for the future! Reserve your spot in a 
          <span className="text-yellow-300 font-mono"> Vault™</span> today, and ease your worries of the growing threat of nuclear war and an uninhabitable home!
        </p>
      </div>
    </div>
  </div>
  )
}

export default About