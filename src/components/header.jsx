import logo from "../assets/img/dc-logo.png"
import LinkListElement from "./header-components/LinkListElement";
import links from "../data/links"
const { navLinks } = links;

function Header() {
    return <header>
        <a href="" className="logo"><img src={logo} alt="logo" /></a>
        <ul className="header-nav">
            {navLinks.map((link, index) => {
                return <LinkListElement key={index} currentLink={link} />
            })}
        </ul>
    </header>;
}


export default Header;