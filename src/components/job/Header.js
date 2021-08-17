import React,{Component} from "react";
import "./Header.css";


class Header extends Component{
    render(){
        return (
            <header>
            <div className="header-res sticky" >
                <div class="header-container">
                <div class="logo">
                    <img src="assets/images/bag.png" alt=""/>
                    <span>  Dev Jobs</span>
                </div>
                <div class="right">
                <sign>
                <div class="sign">
                   <a href="#" id="a">Sign Up</a>
                </div>
                </sign>



                <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            
          </div>
          </div>


                </div>
        

            

    </div>

    </header>
    
        );     
        
    }
    
}
export default Header;
