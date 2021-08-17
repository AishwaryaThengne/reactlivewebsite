import react,{Component} from 'react';
import "./Job.css";

class Job extends Component{
    render(){
        const{logo,rolename,description}=this.props;
        return (
            
                <div class="job-title">
                
                    <div class="top">
                        <img src={logo}/>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
    
                    <div class="rolename">
                        <span >{rolename}</span>
                    </div>
    
                    <div class="description">
                        <span>{description}
    
                        </span>
                        
                    </div>
    
                    <div class="buttons">
                        <div class="button apply-now">
                            Apply Now
                        </div>
                        <div class="button message">
                            Message
                        </div>
                    </div>
                    
                </div>
               
                
    
               
          
      
        
        );
    }
}

export default Job;