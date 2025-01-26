import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
    <div style={{padding: 20, 
        display: 'flex'}}>
      <div style={{width: 200, 
        border: '1px solid #ccc',background:"#6c9d66"}}>
        <Menu/>
      </div>
      <div style={{display: 'flex', 
        flexDirection:'column', 
        flex: 1, border: '1px solid #ccc'}}>
       
        <Layout/>
      </div>
    </div></BrowserRouter>
  );
}

export default App;
