import React from 'react';
import App from './Home';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
<App />
  )
}