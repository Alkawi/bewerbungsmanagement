import Button from '../Button/Button';
import styles from './AddForm.module.css';

function AddForm(): JSX.Element {
  return (
    <form className={styles['form-container']}>
      <label>
        Unternehmen
        <br />
        <input
          type="text"
          placeholder="Muster GmbH"
          required
          className={styles['form-input']}
        />
      </label>
      <label>
        Stellenbezeichnung
        <br />
        <input
          type="text"
          placeholder="Web Developer"
          required
          className={styles['form-input']}
        />
      </label>
      <label>
        Datum der Bewerbung
        <br />
        <input type="date" required className={styles['form-input']} />
      </label>
      <label>
        Ansprechpartner*in
        <br />
        <input
          type="text"
          placeholder="Frau Müller"
          className={styles['form-input']}
        />
      </label>
      <label>
        Kontakt Telefonnummer
        <br />
        <input
          type="tel"
          placeholder="0123456789"
          className={styles['form-input']}
        />
      </label>
      <label>
        Kontakt E-Mail
        <br />
        <input
          type="email"
          placeholder="mueller@muster-gmbh.de"
          className={styles['form-input']}
        />
      </label>
      <label>
        Aktueller Status
        <br />
        <select className={styles['form-input']}>
          <option value="ausstehend">Bewerbung ausstehend</option>
          <option value="beworben">Beworben</option>
          <option value="interview">Vorstellungsgespräch</option>
          <option value="challenge">Coding Challenge</option>
          <option value="zusage">Zusage</option>
          <option value="Absage">Absage</option>
        </select>
      </label>
      <label>
        Letzter Kontakt
        <br />
        <input type="date" className={styles['form-input']} />
      </label>
      <label>
        Rückmeldung bis
        <br />
        <input type="date" className={styles['form-input']} />
      </label>
      <Button>Speichern</Button>
    </form>
  );
}

export default AddForm;
