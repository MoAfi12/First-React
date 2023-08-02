import React from "react"
import photo1 from './images/photo1.jpg'

export function Header(){
return(
    <div>
        <nav className="nav">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="ul">
            <ul>
                <li><a href="#">Home</a></li>
                <li> <a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </nav>
    </div>

)
}

const HeroSection = ()=>{
    return(
        <div>
            <div className="hero-section">
            <div className="left-column">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ipsam obcaecati modi hic accusamus praesentium dolor omnis officiis corrupti et? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, incidunt.</p>
            </div>
            <div className="right-column">
             <img src={photo1} alt="" />
            </div>
            </div>
        </div>
    )
}

export default HeroSection