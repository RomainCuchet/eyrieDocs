import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type SourceLinkCardProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export default function SourceLinkCard({
  title,
  description,
  href,
  ctaLabel = 'View on GitHub',
}: SourceLinkCardProps): React.ReactElement {
  return (
    <div className={styles.root} aria-label={title}>
      <p className={styles.row}>
        <span className={styles.label}>{title}:</span>{' '}
        <Link className={styles.link} to={href} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </Link>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
