import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          
            <Route exact path="/"><Home/></Route>
            <Route exact path="/product"><Product/></Route>
            <Route exact path="/productList"><ProductList/></Route>
            <Route exact path="/register"><Register/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/cart"><Cart/></Route>
         
        </Switch>
      </BrowserRouter>
     
  );
}

export default App;
