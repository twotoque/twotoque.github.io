import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function Header() {
  return (
    <header className="headerBody">
        <div className="flex justify-between items-center pt-5 pb-5">
            <h3><Link to="/" className="inline-block text-black hover:scale-110 transition duration-200 no-underline font-bold">Derek Song</Link></h3>

            <nav className="flex space-x-10 text-sm text-gray-600">
                <h3><Link to="/resume" className="inline-block text-gray-600 hover:text-black hover:scale-110 transition duration-200 no-underline hover:font-bold">Resume</Link></h3>
                <a
  href="mailto:dereksong28@gmail.com"
  className="flex items-center gap-2 !text-gray-600 text-muted-foreground hover:text-foreground transition"
>
  <Mail className="size-10" />
</a>
        </nav>
            
      </div>
    </header>
  );
}

export default Header;