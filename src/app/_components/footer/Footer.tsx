// components/Footer.js
import Image from "next/image";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`wrapper ${styles.footerContainer}`}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopName}>AWESOME SMOOTHIES</div>
                    <div className={styles.footerTopLinks}>
                        <div>Follow Us!</div>
                        <div className="flex">
                            <a href="https://www.facebook.com/awesomesmoothies" target="_blank" rel="noopener noreferrer">
                                <Image src="/static/svg/facebook.svg" alt="Facebook" width={48} height={48} />
                            </a>
                            <a href="https://www.tiktok.com/@awesome.smoothies" target="_blank" rel="noopener noreferrer">
                                <Image src="/static/svg/tiktok.svg" alt="Tiktok" width={48} height={48} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCg1yyzsB37U6dYncm-M0xCg" target="_blank" rel="noopener noreferrer">
                                <Image src="/static/svg/youtube.svg" alt="Youtube" width={48} height={48} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomCopyright}>
                        © 2021 Awesome Coffee. All rights reserved.
                    </div>
                    <div className={styles.footerBottomLinks}>
                        <a href="/">Privacy Policy</a>
                        <div className={styles.footerBottomLinksSeparator}>|</div>
                        <a href="/">Terms of Services</a>
                        <div className={styles.footerBottomLinksSeparator}>|</div>
                        <a href="/">Do Not Track</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;