import React from 'react'

function Modal( { onClose, terms, title } ) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{terms}</p>
        <button onClick={onClose} className="mt-4 text-mygreen underline">
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal