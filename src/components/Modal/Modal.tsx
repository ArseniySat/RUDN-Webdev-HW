import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        <h2 className={styles.modalTitle}>Оформление заказа</h2>
        <form className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Номер телефона</label>
            <input type="tel" id="phone" required />
          </div>
          <button type="submit" className={styles.submitBtn}>Отправить заказ</button>
        </form>
      </div>
    </div>
  );
};
