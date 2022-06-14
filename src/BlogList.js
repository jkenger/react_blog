import { Link } from "react-router-dom";

const BlogList = ({ blogs, titles, handleDelete }) => {
    return (
        <div className="blog-l">
            <h2>{titles}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default BlogList;