import React,{useState,useEffect, useSyncExternalStore} from 'react';
import article from './data/article.json'
import './main.css'
import Card from './card';
import Banner from './banner';
import Account from './account';


export default function Main(){




    let [list,setList] = useState([]);
    let [dataBool, setdataBool] = useState(false);
    // let article = [];
    useEffect(      ()=>{
        fetch('/api/getAll')
        .then((response) => response.json())
        .then((data) => setList(data))
        .then(setdataBool(true))
    },[]);

    // console.log(article)
    return(
        <div className='main'>
        <Account visibility={false}/>
        <Banner visibility={true} /> 

        {

            
            // console.log(list[0])
            
            article.blogs.map(({username,title,tags,likes,comments,id,date})=>(
                <Card 
                    username={username}
                    title = {title}
                    tags = {tags}
                    likes = {likes}
                    comments = {comments}
                    id = {id}
                    date = {date}
                />
            ))

            // list.map(({title})=>{
            //     <Card 
            //         title = {title}
            //     />
            // })
            
            // list.map(({title,tags})=>(
            //     <Card 
            //         username={'username'}
            //         title = {title}
            //         tags = {tags}
            //         likes = {'likes'}
            //         comments = {'comments'}
            //         id = {'id'}
            //         date = {'date'}
            //     />
            // ))
            
        }
            
        
        </div>
    );
}