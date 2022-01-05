import React, { Component } from 'react'
import { productData } from './photo'

export default class productpage extends Component {
    render() {
        const ite=window.location.href.split("/");
        const x=ite[ite.length-1]
        let pro=productData.filter((obj)=>{
            return obj.name==x;
        });
        pro=pro[0];
        //console.log(pro);
        window.onload = (event) => {
            window.location.href = "https://garv9852.github.io/riwaazFashion/";
          };
        return (
            <div className='product-page'>
                <div className="photo-container">
                <a href={pro.link[0]}><div className="product-img">
                        <img src={pro.link[0]} style={{"height":"100%","width":"100%","border-radius":"50px"}}/>
                    </div></a>
                </div>
                <div className="product-description">
                    <div className='product-headline'>{pro.desc}</div>
                    <div class="product-size">
                        {
                            pro.proSize.map((item)=>(
                                <div className="size-number">{item}</div>
                            ))
                        }
                    </div>
                    <div className='product-price'>₹{pro.price}</div>
                    <div className="highProduct-price">₹{pro.price+(30/100*pro.price)}</div>
                </div>
            </div>
        )
    }
}
