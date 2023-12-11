import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from './layouts/layout';
import IndexPages from './components/IndexPages';
import Login from './components/Login';
import Register from './components/Register';
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';

function App() {
  return (
    <UserContextProvider>
         <Routes>
      <Route path={'/'} element={<Layout/>}>

        <Route index element={<IndexPages/> }/>

        <Route path={'/Login'} element={ <Login/>}/>

        <Route path={'/register'} element={ <Register/> }/>

        <Route path={'/create'} element={ <CreatePost/>}/>

        <Route path={'/post/:id'} element ={<PostPage/>}/>


      </Route>
    </Routes>
    </UserContextProvider>
   
  
  
  );
}

export default App;
