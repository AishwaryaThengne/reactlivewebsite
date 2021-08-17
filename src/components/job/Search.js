import React,{Component} from "react";
import "./Search.css";

class Search extends Component{
    render(){
        return (
           
            <div class="search"> 
            <div class="search-container">
           
                <div class="input-container">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="filter by title" name="filter-jobs" id="filter-jobs"></input>
    
    
                </div>
                
                <div class="button-container">
                    <span>Find Jobs</span>
    
                </div>
            </div>
             
        </div>
        
        );     
        
    }
    
}
export default Search;
