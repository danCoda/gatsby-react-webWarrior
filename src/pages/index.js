import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home(props) {
  const {title, description } = props.data.site.siteMetadata;
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
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  ) 
}

const bannerStyle = {
  maxWidth: '100%'
}

// Page query. 
/* export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
` */