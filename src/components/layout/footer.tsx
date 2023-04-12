import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-600 px-4 text-white">
      <div className="max-w-5xl mx-auto py-4 border-t border-yellow-400">
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-baseline gap-8">
          <div className="flex flex-col text-sm">
            <span className="text-yellow-300 font-mono text-lg">About Us</span>
            <p className="hover:text-yellow-300 cursor-pointer">Vision</p>
            <p className="hover:text-yellow-300 cursor-pointer">News</p>
            <p className="hover:text-yellow-300 cursor-pointer">Events</p>
            <p className="hover:text-yellow-300 cursor-pointer">Press Releases</p>
            <p className="hover:text-yellow-300 cursor-pointer">Careers</p>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-yellow-300 font-mono text-lg">Products</span>
            <p className="hover:text-yellow-300 cursor-pointer">Shelters</p>
            <p className="hover:text-yellow-300 cursor-pointer">V.A.T.S.</p>
            <p className="hover:text-yellow-300 cursor-pointer">G.E.C.K.</p>
            <p className="hover:text-yellow-300 cursor-pointer">N.A.P.P.</p>
            <p className="hover:text-yellow-300 cursor-pointer">C.A.M.P.</p>
            <p className="hover:text-yellow-300 cursor-pointer">Promotional</p>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-yellow-300 font-mono text-lg">Services</span>
            <p className="hover:text-yellow-300 cursor-pointer">Survival Guide</p>
            <p className="hover:text-yellow-300 cursor-pointer">Vaults</p>
            <p className="hover:text-yellow-300 cursor-pointer">Shop-Tec</p>
            <p className="hover:text-yellow-300 cursor-pointer">Future-Tec</p>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-yellow-300 font-mono text-lg">Contact Us</span>
            <p className="hover:text-yellow-300 cursor-pointer">Customer Service</p>
            <p className="hover:text-yellow-300 cursor-pointer">Vault Service</p>
            <p className="hover:text-yellow-300 cursor-pointer">Special Projects</p>
            <p className="hover:text-yellow-300 cursor-pointer">Vault-Tec Security</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer