import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import NotFoundContent from './NotFoundContent';

export default function NotFound(): ReactNode {
  return (
    <Layout
      title="404 - Page Not Found"
      description="Page not found">
      <NotFoundContent />
    </Layout>
  );
}
