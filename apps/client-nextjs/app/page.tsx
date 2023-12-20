import styles from './page.module.css';
import { Test } from './test';

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <p>
        examples/basic&nbsp;
      </p>
      <Test />
    </main>
  );
}
