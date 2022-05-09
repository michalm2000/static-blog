import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react"

export default ({ data }) => {
 const post = data.markdownRemark;
 const img = getImage(data.file)
 console.log(data.file)
 console.log(img)
 const disqusConfig = {
	shortname: process.env.GATSBY_DISQUS_NAME,
	config: { identifier: post.fields.slug},
 }

 return (
	 <Layout>
 <div>
 <h1>{post.frontmatter.title}</h1>
 <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} <span s
tyle={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span></h4>
 <GatsbyImage image={img} alt="header"/>

	{/* <StaticImage src="../images/example.png" alt="header" /> */}
 <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
 </div>
 <DiscussionEmbed {...disqusConfig} />
  </Layout>
 );
};
export const query = graphql`
 query PostQuery($slug: String!, $img: String!) {
 markdownRemark(fields: { slug: { eq: $slug } }) {
 	html
 
 	frontmatter {
 		title
 		author
 		date
		
	}
	fields{
		slug
	}
 }
 file(relativePath: { eq: $img }) {
	childImageSharp {
        gatsbyImageData(width: 200)
	}
	}
 }
 
`;

