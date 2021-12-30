import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="first-container">
                    <div className="logo-container">
                        <Link to="/riwaazFashion/"><img src='https://firebasestorage.googleapis.com/v0/b/riwaaz-fashion.appspot.com/o/LOGO%2Flooo-removebg-preview.png?alt=media&token=2dac9df4-f9b4-4e62-b44b-1351953a5e5f' className="logo-image"></img></Link>
                        <div className='material-icons cart-icon'>shopping_cart</div>
                    </div>
                </div>
            </>
        )
    }
}
