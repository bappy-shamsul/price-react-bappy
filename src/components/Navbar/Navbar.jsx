import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Line} from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/blog", name: "Blog" },
        { id: 6, path: "/blank", name: "Blank" }
      ];
    return (
        <nav>
             <div onClick={() => {setOpen(!open)}} className="md:hidden text-2xl">
                {
                    open === true ? <VscEyeClosed />: <RiMenu2Line></RiMenu2Line>
                }
                
             </div>
            <ul className={`md:flex absolute md:static duration-1000 p-6 text-black bg-yellow-200 ${open ? "top-6" : "-top-60"}`}>
           
            {
                // routes.map(route => console.log(route))
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;