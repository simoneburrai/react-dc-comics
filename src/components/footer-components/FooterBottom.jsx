import facebookImg from "../../assets/img/fb-logo.png"
import twitterImg from "../../assets/img/twitter-logo.png"
import youtubeImg from "../../assets/img/yt-logo.png"
import pinterestImg from "../../assets/img/pinterest-logo.png"
import geoImg from "../../assets/img/geo-logo.png"

function FooterBottom() {
    return <div className="footer-bottom">
        <button>Sign Up Now</button>
        <div className="links">
            <a href="" className="follow">Follow Us</a>
            <a className="logo-link" href=""><img src={facebookImg} alt="facebook logo" /></a>
            <a className="logo-link" href=""><img src={twitterImg} alt="twitter-logo" /></a>
            <a className="logo-link" href=""><img src={youtubeImg} alt="youtube logo" /></a>
            <a className="logo-link" href=""><img src={pinterestImg} alt="pinterest logo" /></a>
            <a className="logo-link" href=""><img src={geoImg} alt="geo logo" /></a>
        </div>
    </div>
}

export default FooterBottom;