import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from './layouts/layout';
import IndexPages from './components/IndexPages';
import Login from './components/Login';
import Register from './components/Register';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
    <UserContextProvider>
         <Routes>
      <Route path={'/'} element={<Layout/>}>

        <Route index element={<IndexPages/> }/>

        <Route path={'/Login'} element={ <Login/>}/>

        <Route path={'/register'} element={ <Register/> }/>

      </Route>
    </Routes>
    </UserContextProvider>
   
  
  
  );
}

export default App;
