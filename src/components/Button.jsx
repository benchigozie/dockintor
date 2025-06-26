function Button({ className, btnText}) {
  return (
    <button className={`px-4 py-2 cursor-pointer ${className}`}>{btnText}</button>
  )
}

export default Button;