
import './App.css';
import React from 'react';

class App extends React.Component  {
  Person ={fullName:"Olfa Ayech",
    bio:"I'm Olfa , industrial computer engineer. Now i try to improve my web development skills by assistig a Full stack web development course.", 
    imgSrc:"./LLLL.jpg",
   profession:"Industrial Computer engineer"}
    show={
      val:true
    }
    
    
  
  render() {
   
    
    const btn={ 
      border: "none",
      color: "white", 
      padding: "14px 28px", 
      cursor: "pointer" ,
      backgroundColor: "#f44336",
      marginTop:"4px",
      marginLeft:"5px"}
     

    return(
      <div className="App">
     {this.show.val? <div className="mt-6 space-y-12 lg:space-y-0 lg:grid  justify-items-center  ">
       <div className="group relative">
        <div className="relative w-80 h-100 bg-white ">
          
          <img src={this.Person.imgSrc} className="w-full h-full object-center object-cover " alt=""/>
           </div>
     
          <h3 className="mt-6 text-5xl text-red-500">
           
              {this.Person.fullName}
             
          </h3>
          
          <p className="text-3xl font-semibold text-gray-900 mt-3 ">{this.Person.profession}</p>
         
          <p className="text-1xl font-semibold text-gray-900  relative w-80 h-100 mt-3 ">{this.Person.bio}</p>
          </div>
        </div>:null}
        <button style={btn} onClick={()=>this.setState({val:this.show.val=!this.show.val})}>
             Show  
        </button>
        
        </div>
    
  
    )}}

export default App;
