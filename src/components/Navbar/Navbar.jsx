import Links from "../Links/Links";


const Navbar = () => {
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
            <ul className="md:flex ">
            {
                // routes.map(route => console.log(route))
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;