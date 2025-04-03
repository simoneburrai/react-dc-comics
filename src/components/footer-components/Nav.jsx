import digitalComicsImg from "../../assets/img/buy-01.png"
import digitalMerchImg from "../../assets/img/buy-02.png"
import subscriptionImg from "../../assets/img/buy-03.png"
import shopLocatorImg from "../../assets/img/buy-04.png"
import powerVisaImg from "../../assets/img/buy-05.svg"


function Nav() {
    return <div className="footerNav">
        <div className="navElement">
            <img src={digitalComicsImg} alt="digital Comics" />
            <span>Digital Comics</span>
        </div>
        <div className="navElement">
            <img src={digitalMerchImg} alt="Merchandise" />
            <span>Dc Merchandise</span>
        </div>
        <div className="navElement">
            <img src={subscriptionImg} alt="Subscription" />
            <span>Subscription</span>
        </div>
        <div className="navElement">
            <img src={shopLocatorImg} alt="Shop Locator" />
            <span>Comic Shop Locator</span>
        </div>
        <div className="navElement">
            <img src={powerVisaImg} alt="DC Power Visa" />
            <span>Dc Power Visa</span>
        </div>
    </div>
}

export default Nav;