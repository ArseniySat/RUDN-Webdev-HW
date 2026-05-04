import { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
  name: string;
  price: number;
  desc: string;
  image: string;
}

export const Card = ({ name, price, desc, image }: CardProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDesc}>{desc}</p>
        <div className={styles.productPrice}>{price} ₽/шт</div>
        
        {count === 0 ? (
          <button className={styles.orderButton} onClick={() => setCount(1)}>Заказать</button>
        ) : (
          <div className={styles.counter}>
            <button className={styles.countBtn} onClick={() => setCount(count - 1)}>-</button>
            <span className={styles.countValue}>{count}</span>
            <button className={styles.countBtn} onClick={() => setCount(count + 1)}>+</button>
            <div className={styles.totalPrice}>{count * price} ₽</div>
          </div>
        )}
      </div>
    </div>
  );
};
