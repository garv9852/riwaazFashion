import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            mobile:false,
            menu:0
        }
    }
    componentDidMount=()=>{
        let ismobile=window.matchMedia("only screen and (max-width: 969px)").matches;
        if(ismobile){
            this.setState({mobile:true})
        }
        else{
            this.setState({mobile:false})
        }
    }

    menu=()=>{
        if(this.state.menu==0)
        {
            this.setState({
                menu:1
            })
        }
        else{
            this.setState({
                menu:0
            })
        }
    }
    render() {
        return (
            <>
                <div className="first-container">
                    <div className="logo-container">
                    {  
                        this.state.mobile==false?
                        <>  
                            <Link to="/riwaazFashion"><img src='https://firebasestorage.googleapis.com/v0/b/riwaaz-fashion.appspot.com/o/LOGO%2Flooo-removebg-preview.png?alt=media&token=2dac9df4-f9b4-4e62-b44b-1351953a5e5f' className="logo-image"></img></Link>
                            <div className='navbar'>
                                <div className='suede btn'>SUEDE</div>
                                <div className='karachi btn'>KARACHI</div>
                                <div className='fleece btn'>FLEECE</div>
                                <div className='TrackSuit btn'>TRACK SUIT</div>
                            </div>
                            <div className='material-icons cart-icon'>shopping_cart</div>
                        </>
                        :
                        <>
                            <div className='material-icons menu-icon' onClick={this.menu}>menu</div>  
                            <Link to="/riwaazFashion"><img src='https://firebasestorage.googleapis.com/v0/b/riwaaz-fashion.appspot.com/o/LOGO%2Flooo-removebg-preview.png?alt=media&token=2dac9df4-f9b4-4e62-b44b-1351953a5e5f' className="logo-image"></img></Link>
                            <div className='material-icons cart-icon'>shopping_cart</div>
                        </>
                    }
                    </div>
                    {
                        this.state.menu==1?
                        <div className='menu-container'>
                            <div className='material-icons back-btn' onClick={this.menu}>arrow_back</div>
                            <div className='menu-block'>
                                <div className='menu-item'>Suede</div>
                                <div className='menu-item'>Karachi Fabric</div>
                                <div className='menu-item'>Fleece</div>
                                <div className='menu-item'>Track Suit</div>
                            </div>
                        </div>
                        :<></>
                    }
                </div>
            </>
        )
    }
}
