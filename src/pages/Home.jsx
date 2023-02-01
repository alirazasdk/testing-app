import { useEffect } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
const Home=()=>{
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(((res)=>{
      console.log('res',res.data)
    }))
  },[])
  return( <><Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <meta name="description" content="I am a description, and I can create multiple tags" />
            </Helmet>
  <h1>This is Home</h1></>
  );
}
export default Home;