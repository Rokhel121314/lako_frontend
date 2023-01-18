
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import { Stocks} from "./pages/Stocks";
import { Pos } from "./pages/Pos";
import { Transaction } from "./pages/Transaction";
import { Sales } from "./pages/Sales";
import {NavigationBar} from './component/NavigationBar';
import { ProductDetail } from './pages/ProductDetail';
import TransactionDetail from './pages/TransactionDetail';
import User from './pages/User';





function App() {

  
  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={<Stocks/>}/>
      <Route path='/pos' element={<Pos/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
      <Route path='/sales' element={<Sales/>}/>
      <Route path='/stocks/show/:id' element={<ProductDetail/>}/>
      <Route path='/transaction/show/:id' element={<TransactionDetail/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    </>

  )
  
}

export default App;
