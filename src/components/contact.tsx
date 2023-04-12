import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-24">
      <div className="flex flex-col items-center text-center">
        <span className="text-yellow-400 text-2xl">You probably have questions.</span>
        <p className="mt-4 text-lg">Reach out to us at <br />
          <span className="text-yellow-400 text-xl"> info@vault-tec.com </span> 
          <br /><em>or</em><br />
          <span className="text-yellow-400 text-xl"> 1 (800) VAULT-TEC </span>
          <br />
          and we'll be more than happy to assist you! 
        </p>
      </div>
      <div className="text-center mt-12 text-3xl">
        We look forward to seeing you at your local &nbsp;<span className="text-yellow-300 font-mono"> Vault™ </span>&nbsp;!
      </div>
    </div>
  )
}

export default Contact