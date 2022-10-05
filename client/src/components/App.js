import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import '../App.css';
import CheckOut from './product/CheckOut';
import MainProductPage from './product/MainProductPage';
import ThankYou from './product/ThankYou';

function App() {
  const [checkoutData,setCheckoutData] = useState([])
  return (
    <div className="App">
      {/* <MainProductPage/> */}
      <Routes>
        <Route path = '/' element = {<MainProductPage checkoutData = {checkoutData} setCheckoutData = {setCheckoutData}/>}/>
        <Route path = 'checkout' element = {<CheckOut checkoutData = {checkoutData} setCheckoutData = {setCheckoutData}/>}/>
        <Route path = 'thankyou' element = {<ThankYou/>}/>
      </Routes>
    </div>
  );
}

export default App;
