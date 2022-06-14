import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('ken')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added')
                setIsPending(false)
                navigate('/')
            })

    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="">Blog body:</label>
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label htmlFor="">Blog author:</label>
                <select name="" id="" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="ken">ken</option>
                    <option value="asd">asd</option>
                    <option value="ningning">ningning</option>
                </select>

                {!isPending && <button>Add a blog</button>}
                {isPending && <button disabled>Adding blog....</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;