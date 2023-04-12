import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="h-screen max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center h-screen text-white border-b border-yellow-400">
        <div className="text-center">
          <h1 className="text-yellow-400 text-7xl py-4">Vault-Tec <br /> Industries</h1>
          <h3 className="text-2xl py-4 mb-12 ">Revolutionizing safety for an uncertain future</h3>
          <Link href="/"
            className="py-4 border-4 border-yellow-400 px-8 rounded-full hover:bg-yellow-400 transition duration-200">
              Reserve Your Spot Today!
          </Link>
        </div>
        <div className="hidden md:flex">
          <Image 
            src="/vb-wink.svg" 
            width={500}
            height={0}
            alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Home