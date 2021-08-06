import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
    // Static query (for graphql queries from components).
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{ title }</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portolio Projects</Link>
            </div>
        </nav>
    )
}

