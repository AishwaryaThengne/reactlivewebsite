import React, {Component} from 'react';

import Job from "./Job";
import "./Job.css";
import "./JobList.css";



class JobList extends Component{
  state={
    users:[
    {
    logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
    rolename: "Pega Developer - 100% Remote",
    description: "The ideal candidate is as passionate about solving challenges through technology.",
    
      
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    

  ],



  users1:[
    {
    logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
    rolename: "Pega Developer - 100% Remote",
    description: "The ideal candidate is as passionate about solving challenges through technology.",
    
      
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    {
        logo: "https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png",
        rolename: "Pega Developer - 100% Remote",
        description: "The ideal candidate is as passionate about solving challenges through technology.",
        
          
    },
    

  ],


};









    render() {
      const{users}= this.state;
      const{users1}= this.state;

     



        return(
            <main>
            <div class="jobs-list">
                
            <h1>Showing 15 jobs</h1>
            <div class="jobs-container">
                
                  {Array.isArray(users) && users.map((user, i) =>(
                    
                    <Job
                    key={user.name+i}
                    logo={user.logo}
                    rolename={user.rolename}
                    description={user.description}                   
                   
                      />
                      
                      ))}
               
                


                

            </div>

            

            <div class="jobs-container" id="load-content">
                
                {Array.isArray(users1) && users.map((user, i) =>(
                  
                  <Job
                  key={user.name+i}
                  logo={user.logo}
                  rolename={user.rolename}
                  description={user.description}                   
                 
                    />
                    
                    ))}



                 <a href="#" id="less" >Load less   <i class="fas fa-arrow-up"></i></a>

             
              


              

          </div>
             <div className="load">
                 <a href="#load-content" id="load" >Load More</a>

                 {/* <a href=""  id="unload">Load less</a> */}

             </div>
             
            </div>
            </main>
        );
    }
}

export default JobList;