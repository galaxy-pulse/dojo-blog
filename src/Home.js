import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //Adding tabs on the side
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //Deletes the blog using a button
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    //The first version teaches about useEffect, runs only on the first render because of the empty array
    //The second version (using the fetch request) pulls data from our db.json file rather than using an API
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })
    }, 1000);
    }, []);

    //This is a prop for BlogList
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;