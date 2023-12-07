import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from './layouts/layout';
import IndexPages from './components/IndexPages';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>

        <Route index element={<IndexPages/> }/>

        <Route path={'/Login'} element={ <div>log</div>}/>

        <Route path={'/register'} element={ <div>register</div> }/>

      </Route>
    </Routes>
  
  
  );
}

export default App;
