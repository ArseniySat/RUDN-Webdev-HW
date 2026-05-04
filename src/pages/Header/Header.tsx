import styles from './Header.module.css';

export const Header = () => {
  return (
    <section className={styles.firstScreen}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={`${styles.headerItem} ${styles.bakaryName}`}>Сладкий сундук</div>
        
        <div className={`${styles.headerItem} ${styles.bakaryAddress}`}>
          <img src="/first-screen 2/place-icon.svg" alt="address-icon" className={styles.icon} />
          <span className={styles.addressText}>
            г. Санкт Петербург,
            <div className={styles.textWithSpaceLeft}>ул. Куйбышева 31</div>
          </span>
        </div>

        <div className={`${styles.headerItem} ${styles.bakaryPhoneNumber}`}>
          <img src="/first-screen 2/phone-icon.svg" alt="phone-icon" className={styles.icon} />
          <span className={styles.number}><strong>8 (812) 844-95-49</strong></span><br />
          <span className={`${styles.textWithSpaceLeft} ${styles.numberInfoText}`}>
            Ежедневно с 9:00 до 20:00
          </span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.firstScreenContainer}`}>
        <p className={styles.firstScreenAboveTitle}><span>Вкуснейшие</span></p>
        <h1 className={styles.firstScreenTitle}>
          Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
        </h1>
        <p className={styles.firstScreenSubtitle}>
          Приготовим за 3 часа в день заказа.<br />
          Доставка на авто в холодильнике.
        </p>
        <div className={styles.btnGoCatalog}>
          <a href="#" className={`${styles.btn} ${styles.btnA}`}>Перейти в каталог</a>
          <span>9 различных видов<br />на выбор</span>
        </div>
      </div>
    </section>
  );
};
