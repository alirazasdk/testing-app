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
  return( <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <meta property="og:url" content="https://testing-app-git-master-alirazasdk.vercel.app/"></meta>
                <meta property="og:description" content="A dummies guide to getting up and running with selenium-webdriver"></meta>
  </Helmet>
  <h1>This is Home</h1></>
  );
}
export default Home;