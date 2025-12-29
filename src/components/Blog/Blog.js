import uniqid from 'uniqid'
import './Blog.css'
import { blogPosts } from '../../portfolio'
import BlogContainer from './BlogContainer'

const Blog = () => {
    if (!blogPosts.length) return null

    return (
        <section id='blog' className='section projects'>
            <h2 className='section__title'>My Blog Posts</h2>

            <div
                // className='projects__grid'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {blogPosts.map((project) => (
                    <BlogContainer key={uniqid()} project={project} />
                ))}
            </div>

        </section>
    )
}

export default Blog;
