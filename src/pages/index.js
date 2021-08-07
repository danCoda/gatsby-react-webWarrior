import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h2>Develop & Deploy</h2>
          <p>UX designer & web developer based in Sydney.</p>
          <Link className={styles.btn} to="/projects">My Portfiliio Projects</Link>
        </div>
        <Img image={getImage(props.data.file)} alt="Banner" />
      </section>
    </Layout>
  ) 
}

const bannerStyle = {
  maxWidth: '100%'
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`