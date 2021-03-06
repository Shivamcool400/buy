import React, {useState, useEffect, Component} from 'react';
import Fire from '../../../../firebase';
import Product from '../product';


const Apple_5 = () => {
    const db = Fire.firestore();

    useEffect(() => {
        
       db.collection('head_5_apple').orderBy("choice").onSnapshot(snapshot => (
         setHead(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('specs_5_apple').onSnapshot(snapshot => (
         setSpecs(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('youtube_5_apple').onSnapshot(snapshot => (
         setYoutube(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('blog_5_apple').onSnapshot(snapshot => (
         setBlog(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('seller_5_apple').orderBy("name").onSnapshot(snapshot => (
         setSeller(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('gaming_5_apple').onSnapshot(snapshot => (
         setGaming(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('tech_5_apple').orderBy("serial").onSnapshot(snapshot => (
         setTech(snapshot.docs.map(doc => doc.data()))
       ))
       }, []);



    const [head,setHead] = useState([]);
    const [specs,setSpecs] = useState([]);
  
    const [youtube,setYoutube] = useState([]);
    const [blog,setBlog] = useState([]);
    const [seller,setSeller] = useState([]);
    
    const [gaming,setGaming] = useState([]);
    const [tech,setTech] = useState([]);

    return (
        <div>
            {head.map((head) => (
           <Product choice={head.choice} device={head.device} url={head.url} specs={specs} youtube={youtube} blog={blog} seller={seller} gaming={gaming} tech={tech}/>
          ))}
        </div>
    )
}

export default Apple_5

