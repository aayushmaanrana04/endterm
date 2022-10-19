import React, { useState, useEffect, useSyncExternalStore,useRef } from 'react';
import Button_Major from './button_major';
import './new.css'

export default function New() {
	const [title,setTitle] = useState('');
	const [content,setContent] = useState('');
	const [tags,setTags] = useState('');

	// useEffect(()=>{
	// 	console.log(title)
	// 	console.log(content)
	// 	// console.log(({title:title,content:content}))
	// })

	function handleSubmit(e){
		e.preventDefault()
    	fetch('/api/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body:JSON.stringify({
				title : title,
				content : content,
				tags:tags
			})
		})
	}
	return (
		<div id='page'>
		<form id='container' onSubmit={handleSubmit}>
			<div>
        		<textarea 
					id='title-ta' 
					value={title}
					rows={1} 
					placeholder='Title' 
					onChange={(e) => setTitle(e.target.value)}
					autoFocus 
					required
				></textarea>
			</div>

			<div>
 				<textarea 
					id='tags-ta' 
					rows={1}  
					placeholder='tags'
					onChange={(e) => setTags(e.target.value)}
				></textarea>
 			</div>

			<div>
				
				<textarea
					id='content-ta' 
					value={content}
					rows={5}
					onChange={(e) => setContent(e.target.value)} 
					placeholder='content' 
					required
				 ></textarea>
			</div>

			<button type='submit'>Post</button>
			<Button_Major link={"cancel"}/>
		</form>
		</div>
	);
};