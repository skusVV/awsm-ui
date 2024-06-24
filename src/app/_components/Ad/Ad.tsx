import styles from './Ad.module.css';

const Ad = () => {
    return (
        <div className={styles.ad}>
            <section className={styles.poster}>
                <a href="https://awesomecoffee.com/products/iced-coffee" target="_blank" rel="noopener noreferrer">
                    <div className={styles.posterWrapper}>
                        <div className={styles.posterContent}>
                            <h2 className={styles.posterTitle}>Delicious. Low carb.</h2>
                            <h3 className={styles.posterSubtitle}>Add Awesome Coffee to your morning routine</h3>
                            <div className={styles.posterLink}>
                                <button className={styles.posterButton}>Learn more</button>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </div>
    );
};

export default Ad;