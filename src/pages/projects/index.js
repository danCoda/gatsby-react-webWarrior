import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
  const projects = data.myProjects.nodes;
  const contact = data.contact.siteMetadata.contact;

  console.log(projects);
  return (
    <Layout>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h2>Projects & Websites I've created</h2>
          <div className={styles.projects}>
            { 
              projects.map(project => (
                <Link 
                  to={`/projects/${project.frontmatter.slug}`}
                  key={project.id}
                >
                  <div>
                    <h3>{ project.frontmatter.title }</h3>
                    <p>{ project.frontmatter.stack }</p>
                  </div>
                </Link>
              ))
            }
          </div>
          <p>Like what you see? Email me at {contact} for a quote!</p>
        </div>
    </Layout>
  )
}

// Export page query.
export const query = graphql`
  query PrjectsPage {
    myProjects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`