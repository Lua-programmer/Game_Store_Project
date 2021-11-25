import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsMailbox2, BsTwitter } from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer">
            <div className="r-sociais">
                <a href='https://www.facebook.com/XboxBR'><BsFacebook /></a>
                <a href='https://www.instagram.com/xboxbr/'><BsInstagram /></a>
                <a href='https://twitter.com/xboxbr'><BsTwitter /></a>
                <a href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https:%2f%2faccount.xbox.com%2fpt-br%2fContactPreferences%3frtc%3d1%26csrf%3dqoa_KiumSBItLKyoQNFnVeVFnx5O-x5M-eZuLHGdxBNnwwIO3x1HEvdkPksTTAw1c0cyMsE8qZqKswTZLb-saCf1xhs1&lc=1046&id=292543&aadredir=1'><BsMailbox2 /></a>
            </div> 
            <span>© Microsoft 2021</span>
        </div>
    )
}

export default Footer
