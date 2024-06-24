// components/Footer.js

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopName}>AWESOME SMOOTHIES</div>
                    <div className={styles.footerTopLinks}>
                        <div>Follow Us!</div>
                        <div>
                            <a href="https://www.facebook.com/awesomesmoothies" target="_blank" rel="noopener noreferrer">
                                {/* link to svg */}
                            </a>
                            <a href="https://www.tiktok.com/@awesome.smoothies" target="_blank" rel="noopener noreferrer">
                                {/* link to svg */}
                            </a>
                            <a href="https://www.youtube.com/channel/UCg1yyzsB37U6dYncm-M0xCg" target="_blank" rel="noopener noreferrer">
                                {/* link to svg */}
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