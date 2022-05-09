import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => {
 console.log(data)


 return(
   <Layout>
   
 <div>
 {data.allMarkdownRemark.edges.map(({node}) => (
 <div key={node.id} className="article-box">
 <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
 <h3 className="title">{node.frontmatter.title}</h3></Link>
 <p className="author">Author: <i>{node.frontmatter.author}</i></p>
 <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
 <p className="excerpt">{node.excerpt}</p>
 </div>
 ))}
 </div>
 </Layout>
 )
}
//sort: {fields: [frontmatter___date], order: DESC}

export default IndexPage
export const query = graphql`
query HomePageQuery{
 allMarkdownRemark {
  totalCount
  edges {
    node {
      fields{
        slug
        img
      }
    frontmatter {
      title
      date
      author
    } 
    excerpt
    timeToRead
  }
 }
 }
 
}`