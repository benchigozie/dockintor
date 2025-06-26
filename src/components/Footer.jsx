import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-mygreen py-28 px-3 md:px-36 text-mylight">
      <div className="flex flex-col md:flex-row justify-between max-w-[1300px] gap-8">
        <div className="flex flex-col gap-22">
          <div><p>Dockintor</p></div>
          <div className="flex flex-col gap-10">
            <p className="font-light">For our latest health tips and tricks subscribe below!</p>
            <div className="flex gap-3">
              <input type="email" className="py-2 px-4 outline-0 border-b-2 focus:border-mylime max-w-42 md:max-w-full" />
              <Button btnText="Subscribe" className="bg-mylime text-mygreen rounded-full hover:bg-mylight/80" />
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-28 min-w-[300px]">
          <div>
            <h3 className="font-bold">Menu</h3>
            <ul>
              <li>Our Doctors</li>
              <li>How It Works</li>
              <li>Book a Session</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul>
              <li>123-456-7890</li>
              <li>info@mysite.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>&#169; 2025 DOCKINTOR. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;