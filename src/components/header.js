import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="first-container">
                    <div className="logo-container">
                        <Link to="/"><img src='/looo-removebg-preview.png' className="logo-image"></img></Link>
                        <div className='material-icons cart-icon'>shopping_cart</div>
                    </div>
                </div>
            </>
        )
    }
}
