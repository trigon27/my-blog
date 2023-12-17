import React, { useRef, useState } from 'react';
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
    const fileInputRef= useRef()

    const uploadIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
  
  
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
   const response =await fetch('https://mern-blog-backend-t0qk.onrender.com/post',{
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
const onUploadClick=()=>{
  fileInputRef.current.click();
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

         <a onClick={()=>onUploadClick()}
         className='UploadCover'
         >{uploadIcon}Upload Your Blog Cover Image</a>
        <input type="file" 
         ref={fileInputRef} 
         style={{display:'none'}}
        className='create_file'
        onChange={ev=>setFile(ev.target.files)}
        />
        
        <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={newValue=>setContent(newValue)}
        className="custom-quill" 
      />
      <button className='create-btn'>Create Post</button>
    </form>
  )
}

export default CreatePost;
