import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router';

    // Specify the modules and formats
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
        ['blockquote', 'code-block'],
  
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],    // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],        // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
        [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
  
        ['clean'],                                       // remove formatting button
        ['link',  'video'],  
      ],
    };
  
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link',  'video',
      'color', 'background',
    ];

const CreatePost = () => {
    const [content, setContent] =useState('');
    const [title, setTitle] =useState('');
    const [summary, setSummary] =useState('');
    const [file, setFile] =useState('');
    const navigate = useNavigate();


  
async function createNewPost(ev)
{
  ev.preventDefault();
  if (!title || !summary || !content || !file) {
    alert('Please fill in all fields');
    return;
  }
  const Data = new FormData();
  Data.set('title',title);
  Data.set('summary',summary);
  Data.set('content',content);
  Data.set('file',file[0]);
  try{
   const response =await fetch('http://localhost:4000/post',{
    method:'POST',
    body:Data,
    credentials:'include',

  });
  if(response.ok)
  {
    navigate('/');
  }else {
    // Handle other response status codes or show appropriate error message
    alert('Error creating post. Please try again.');
  }
}catch(error){
  alert('An error occurred. Please try again.');
}

}


  return (
    <form className='createPost' onSubmit={createNewPost}>
        <input type="title"
         placeholder='Title'
         value={title}
         onChange={ev=>setTitle(ev.target.value)}
          />
        <textarea
        placeholder='Summary' 
        value={summary}
        onChange={ev=>setSummary(ev.target.value)}
        />
        <input type="file" 
        className='create_file'
        onChange={ev=>setFile(ev.target.files)}
        />
        
        <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={newValue=>setContent(newValue)}
      />
      <button className='create-btn'>Create Post</button>
    </form>
  )
}

export default CreatePost;
