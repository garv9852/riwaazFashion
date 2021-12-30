import React, { Component } from 'react'
import { productData } from './photo'
import {Link} from 'react-router-dom'
export default class items extends Component {
    render() {
        //console.log(productData);
        return (
            <>
                <div className='headings'>Deals</div>
                <div className='items-container'>
                    {
                        productData.map((item)=>(
                            <Link to={{pathname:`/product/${item.name}`,
                                       state:item.name}} style={{"textDecoration":"none"}}>
                                <div className='item-card'>
                                    <div className='image-cont'>
                                        <img src={item.link[0]}className='item-image'/>
                                    </div>
                                    <div className='price-container'>
                                        <div className='high-price'>₹{item.price+(30*item.price)/100}</div>
                                        <div className='item-price'>₹{item.price}</div>   
                                    </div> 
                                </div> 
                            </Link>
                        ))
                    }
                </div>   
            </>
        )
    }
}
