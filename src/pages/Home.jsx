import { useEffect } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet-async';
const Home=()=>{
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(((res)=>{
      console.log('res',res.data)
    }))
  },[])
  return(<>
  <Helmet>
          <title>Learning React Helmet!</title>
          <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
  <h1>This is Home</h1>
  </>);
}
export default Home;