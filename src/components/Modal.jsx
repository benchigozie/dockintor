import ReactMarkdown from 'react-markdown'

function Modal( { onClose, terms, title } ) {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ReactMarkdown 
        components={{
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        }}
        >{terms}</ReactMarkdown>
        <button onClick={onClose} className="mt-4 text-mygreen underline">
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal