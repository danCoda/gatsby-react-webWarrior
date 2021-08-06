import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h2>Develop & Deploy</h2>
          <p>UX designer & web developer based in Sydney.</p>
          <Link className={styles.btn} to="/projects">My Portfiliio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={bannerStyle} />
      </section>
    </Layout>
  ) 
}

const bannerStyle = {
  maxWidth: '100%'
}