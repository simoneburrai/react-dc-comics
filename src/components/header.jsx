import logo from "../assets/img/dc-logo.png"
import LinkListElement from "./header-components/LinkListElement";
const navLinks = ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"]
function Header() {
    return <header>
        <a href="" className="logo"><img src={logo} alt="logo" /></a>
        <ul className="header-nav">
            {navLinks.map((link) => {
                return <LinkListElement currentLink={link} />
            })}
        </ul>
    </header>;
}


export default Header;