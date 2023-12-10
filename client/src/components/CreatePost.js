import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
      ],
    };
  
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video',
      'color', 'background',
    ];

const CreatePost = () => {
    const [content, setContent] =useState('');
    const [title, setTitle] =useState('');
    const [summary, setSummary] =useState('');
    const [file, setFile] =useState('');
    // const [redirect, setRedirect] =useState(false);
    // const navigate = useNavigate
  
async function createNewPost(ev)
{
  const Data = new FormData();
  Data.set('title',title);
  Data.set('summary',summary);
  Data.set('content',content);
  Data.set('file',file[0]);
  
  

   ev.preventDefault();
   const response =await fetch('http://localhost:4000/post',{
    method:'POST',
    body:Data

  });
  
  

}


  return (
    <form className='createPost' onSubmit={createNewPost}>
        <input type="title"
         placeholder='Title'
         value={title}
         onChange={ev=>setTitle(ev.target.value)}
          />
        <input type="summary" 
        placeholder='Summary' 
        value={summary}
        onChange={ev=>setSummary(ev.target.value)}
        />
        <input type="file" 
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
