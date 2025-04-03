import facebookImg from "../../assets/img/fb-logo.png"
import twitterImg from "../../assets/img/twitter-logo.png"
import youtubeImg from "../../assets/img/yt-logo.png"
import pinterestImg from "../../assets/img/pinterest-logo.png"
import geoImg from "../../assets/img/geo-logo.png"

function FooterBottom() {
    return <div className="footer-bottom">
        <button>Sign Up Now</button>
        <div className="links">
            <span>Follow Us</span>
            <img src={facebookImg} alt="facebook logo" />
            <img src={twitterImg} alt="twitter-logo" />
            <img src={youtubeImg} alt="youtube logo" />
            <img src={pinterestImg} alt="pinterest logo" />
            <img src={geoImg} alt="geo logo" />
        </div>
    </div>
}
export default FooterBottom;