import { useEffect, useState } from "react";
import BlogList from "./Bloglist";


const Home = () => {
  const [blogs, setBlogs ] = useState([
    { title: 'Creating new react app', body: 'Create React .....', author: 'Jane', id:'1'},
    { title: 'Add react to......', author: 'Tris', id: '2'},
    { title: 'Adding links', body:'The versions........', author: 'Jane', id:'3'}
  ]);

  const [name, setName] = useState('Jane')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
 
  useEffect(()=> {
    console.log('use effect run')
    console.log(name);
  }, [name]);

    return ( 
     <div className="home">
        <BlogList blogs={blogs} title='All Blogs' handleDelete= {handleDelete}/>
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'Jane')} title= "Jane's blogs"/>
        <button onClick={() => setName('Sara')}>change name</button>
        <p>{name}</p>
     </div>
    );
    }
 
export default Home;