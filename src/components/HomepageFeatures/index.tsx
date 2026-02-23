import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Security Research Refined',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        All entities are contacted and reports sanitized. When responses fail, we
        advocate for user safety through transparent awareness.
      </>
    ),
  },
  {
    title: 'Knowledge is Power',
    Svg: require('@site/static/img/undraw_eyrie_tree.svg').default,
    description: (
      <>
        Access sanitized disclosures in our Docs or explore our Blog
        for penetration test write-ups and security findings.
      </>
    ),
  },
  {
    title: 'Defend the Frontier',
    Svg: require('@site/static/img/undraw_eyrie_nmap.svg').default,
    description: (
      <>
        Empowering you to hack ethically and build a more resilient,
        safer digital world for everyone.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
