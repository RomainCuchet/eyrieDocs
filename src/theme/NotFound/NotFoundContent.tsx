import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './NotFoundContent.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFoundContent(): ReactNode {
  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.content}>
        <img 
          src={useBaseUrl('/img/logo.svg')} 
          alt="404 Error" 
          className={styles.notFoundImage}
        />
        <Heading as="h1" className={styles.title}>
          404
        </Heading>
        <p className={styles.message}>
          Stop fuzzing the website and check the bog section
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Go to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
