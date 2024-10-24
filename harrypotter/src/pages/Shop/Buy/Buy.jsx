import { useContext, useEffect } from 'react'
import './Buy.scss'
import data from "../../Shop/ShopDatei.json";
import { ShopContext } from '../../../contexts/ShopContext'
import { useNavigate } from 'react-router-dom';
export const Buy=()=>{
    const{setProducts}=useContext(ShopContext)
    const navigate=useNavigate();
  useEffect(()=>{
    setProducts(data.products)
    setTimeout(() => {
        navigate('/shop')
    }, 5000);
  },[])
    return(<div className='buy-page'>
    <h1>This was my test project.</h1>
<h2>Thank you for your attention.</h2>
    </div>)
}