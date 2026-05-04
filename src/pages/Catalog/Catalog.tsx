import { Card } from '../../components/Card/Card';
import styles from './Catalog.module.css';

const products = [
  { id: 1, name: 'Кремовый замок', price: 150, desc: 'Нежный крем любого цвета на выбор, ванильная основа', image: '/senond-screen/img1.png' },
  { id: 2, name: 'Малиновый рай', price: 150, desc: 'Воздушный крем, темная основа и ягода малины', image: '/senond-screen/img2.png' },
  { id: 3, name: 'Фейерверк', price: 150, desc: 'Разноцветные крем, с бисквитной основой', image: '/senond-screen/img3.png' },
  { id: 4, name: 'Шоколадный мир', price: 150, desc: 'Ореховая стружка, нежный крем и шоколадная основа', image: '/senond-screen/img4.png' },
  { id: 5, name: 'Слезы дракона', price: 150, desc: 'Нежный крем любого цвета на выбор, вафельная основа', image: '/senond-screen/img5.png' },
  { id: 6, name: 'Летняя фантазия', price: 150, desc: 'Украшения в форме сердец, для любимого человека', image: '/senond-screen/img6.png' },
  { id: 7, name: 'Мыс безумия', price: 150, desc: 'Разноцветная основа, стружка и нежный крем', image: '/senond-screen/img7.png' },
  { id: 8, name: 'Облачная сказка', price: 150, desc: 'Светлая основа, нежный крем со стружкой сверху', image: '/senond-screen/img8.png' },
  { id: 9, name: 'Темный рыцарь', price: 150, desc: 'Тёмная основа, нежный крем и вкусные шарики', image: '/senond-screen/img9.png' },
];

export const Catalog = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Для любых событий и дорогих вам людей</h2>
        <div className={styles.productsFlex}>
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
