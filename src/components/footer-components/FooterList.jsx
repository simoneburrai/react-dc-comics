const dcComicsList = ["Characters", "Comics", "Movies", "Tv", "Games", "Videos", "News"];
const shopList = ["Shop Dc", "Shop Dc Collectibles"];
const dcList = ["Terms of Use", "Privacy Policy (New)", "Ad Choices", "Advertising",
    "Jobs", "Subscription", "Talent Workshops", "CSPC Certificates", "Ratings", "Shop Help",
    "Contac Us"];
const sitesList = ["DC", "Mad Magazines", "DC Kids", "DC Universe", "DC Power Visa"]

import LinkListElement from "../header-components/LinkListElement";



function FooterList() {
    return <div className="footerList">
        <div className="list-column">
            <div className="list-container">
                <h3>Dc Comics</h3>
                <ul>
                    {dcComicsList.map((link) => {
                        return <LinkListElement currentLink={link} />
                    })}
                </ul>

            </div>
            <div className="list-container" >
                <h3>Shop</h3>
                <ul>
                    {shopList.map((link) => {
                        return <LinkListElement currentLink={link} />
                    })}
                </ul>
            </div>
        </div>
        <div className="list-column">
            <div className="list-container">
                <h3>Dc</h3>
                <ul>
                    {dcList.map((link) => {
                        return <LinkListElement currentLink={link} />
                    })}
                </ul>
            </div>

        </div>
        <div className="list-column">
            <div className="list-container">
                <h3>Sites</h3>
                <ul>
                    {sitesList.map((link) => {
                        return <LinkListElement currentLink={link} />
                    })}
                </ul>
            </div>
        </div>
        <div className="logo-container"></div>
    </div>


}

export default FooterList;