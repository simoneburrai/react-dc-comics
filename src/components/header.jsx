import logo from "../assets/img/dc-logo.png"
import HeaderNavLink from "./header-components/HeaderNavLink";
const links = ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"]
function Header() {
    return <header>
        <a href="" className="logo"><img src={logo} alt="logo" /></a>
        <ul className="header-nav">
            {links.map((link) => {
                return <HeaderNavLink currentLink={link} />
            })}
        </ul>
    </header>;
}


export default Header;