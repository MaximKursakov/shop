
import { TiSocialInstagramCircular, TiSocialYoutubeCircular, TiSocialFacebookCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular} from "react-icons/ti"
import { Newsletter } from "./Newsletter"

export function Footer() {


    return(
        <div className="footer">
            <div className="footer-info">
                <h3 className="footer-title">INFORMATION</h3>
                <p>About us</p>
                <p>Contact us</p>
                <p>News</p>
                <p>Store</p>
            </div>
            <div className="footer-collections">
                <h3 className="footer-title">COLLECTIONS</h3>
                <p>Living Room</p>
                <p>Kitchen</p>
                <p>Bar</p>
            </div>
            <div className="footer-contact">
                <h3 className="footer-title">CONTACT</h3>
                <p>examplestreet 23</p>
                <p>city, 00000</p>
                <p>state</p>
                <p>Phonenumber: 000-000-000</p>
            </div>
            <div className="footer-newsletter">
                <h3 className="footer-title">NEWSLETTER</h3>
                <Newsletter></Newsletter>
                <div className="social-media">
                    <TiSocialInstagramCircular></TiSocialInstagramCircular>
                    <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
                    <TiSocialFacebookCircular></TiSocialFacebookCircular>
                    <TiSocialGooglePlusCircular></TiSocialGooglePlusCircular>
                    <TiSocialTwitterCircular></TiSocialTwitterCircular>
                </div>
            </div>
        </div>
    )
}