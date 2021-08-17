import React, {Component} from 'react';


import Header from "./Header";
import Search from "./Search";
import JobList from "./JobList";
import "./Mobile.css";




class Index extends Component{

render() {
  return (
    <div>
     
      <Header/>
      <Search/>
      <JobList/>
     
    </div>
  );
}
}
export default Index;