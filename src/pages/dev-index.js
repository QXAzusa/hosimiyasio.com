import React from 'react';
import App from './Home';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
    >
    {/* <HomepageHeader /> */}
    <main>
    <App />
      {/* <HomepageFeatures /> */}
    </main>
  </Layout>

  )
}