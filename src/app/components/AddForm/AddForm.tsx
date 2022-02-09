import Button from '../Button/Button';
import styles from './AddForm.module.css';

function AddForm(): JSX.Element {
  return (
    <form className={styles['form-container']}>
      <label>
        Unternehmen
        <br />
        <input type="text" placeholder="Muster GmbH" required />
      </label>
      <label>
        Stellenbezeichnung
        <br />
        <input type="text" placeholder="Web Developer" required />
      </label>
      <label>
        Datum der Bewerbung
        <br />
        <input type="date" required />
      </label>
      <label>
        Ansprechpartner*in
        <br />
        <input type="text" placeholder="Frau Müller" />
      </label>
      <label>
        Kontakt Telefonnummer
        <br />
        <input type="tel" placeholder="0123456789" />
      </label>
      <label>
        Kontakt E-Mail
        <br />
        <input type="email" placeholder="mueller@muster-gmbh.de" />
      </label>
      <label>
        Aktueller Status
        <br />
        <select>
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
        <input type="date" />
      </label>
      <label>
        Rückmeldung bis
        <br />
        <input type="date" />
      </label>
      <Button>Speichern</Button>
    </form>
  );
}

export default AddForm;
