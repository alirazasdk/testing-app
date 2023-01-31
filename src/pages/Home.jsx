import { useEffect } from "react";
import axios from "axios";
const Home=()=>{
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(((res)=>{
      console.log('res',res.data)
    }))
  },[])
  return(<>
  <h1>This is Home</h1>
  </>);
}
export default Home;