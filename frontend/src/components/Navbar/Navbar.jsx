import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
        <img src={assets.logo} alt="logo" className='logo' />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile_app")} className={menu=="mobile_app"?"active":""}>mobile app</li>
            <li onClick={()=>setMenu("contact_us")} className={menu=="contact_us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
                <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar