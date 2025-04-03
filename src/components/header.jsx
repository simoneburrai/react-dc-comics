import logo from "../assets/img/dc-logo.png"

function Header() {
    return <header>
        <div className="logo"><img src={logo} alt="" /></div>
        <ul className="header-nav">
            <li>Characters</li>
            <li>Comics</li>
            <li>Movies</li>
            <li>Tv</li>
            <li>Games</li>
            <li>Collectibles</li>
            <li>Videos</li>
            <li>Fans</li>
            <li>News</li>
            <li>Shop</li>
        </ul>
    </header>;
}


export default Header;