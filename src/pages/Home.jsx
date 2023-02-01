import { useEffect } from "react";
import axios from "axios";
// import { Helmet,HelmetProvider } from 'react-helmet-async';
import DocumentMeta from 'react-document-meta';
const Home=()=>{
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(((res)=>{
      console.log('res',res.data)
    }))
  },[])
  const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
  return( <DocumentMeta {...meta}>
  {/* <HelmetProvider> */}
    {/* <Helmet>
      <title>Learning React Helmet!</title>
      <meta name='description' content='Beginner friendly page for learning React Helmet.' />
    </Helmet> */}
  {/* </HelmetProvider> */}
  <h1>This is Home</h1>
  </DocumentMeta>);
}
export default Home;