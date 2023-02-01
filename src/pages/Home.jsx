import { useEffect, useState } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
const Home=()=>{
  const [data, setData]=useState('');
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(((res)=>{
      console.log('res',res.data)
      setData(res.data.title)
    }))
  },[])
  return( <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <meta property="og:url" content="https://testing-app-git-master-alirazasdk.vercel.app/"></meta>
                <meta property="og:description" content={data}></meta>
  </Helmet>
  <h1>This is Home</h1></>
  );
}
export default Home;