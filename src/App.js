import React, { Children, Component } from "react";
import Header from './components/Header';
import Product from './components/Product';
import './App.css';
class App extends Component {

  
         
  
  render() { 
    var a = 5;
    var name = 'khoa';
    var b = 7;
    var product = {
      id: 1,
      name: 'iphone 7plus',
      price: '100000',
      status: false
    };

    var users = [
      {
      id: 1,
      name: 'nguyen van a',
      age : 18
    },
     {
      id : 2,
      name: 'bui van ga ',
      age : 18
     },
    {
      id: 3,
      name: 'bui trong tu',
      age : 18
    },
    ];
    var elements = users.map((user, index) => {
        return (
        <div key ={user.id}>
            <h2> Tên : {user.name} </h2>  
            <p> Tuổi : {user.age}</p>
            
        </div> 
        )
    });
    
   return (
     <div>
      
       <nav className="navbar navbar-inverse">
         <a className="navbar-brand">Title</a>
         <ul className="nav navbar-nav">
           <li className="active">
             <a>Home</a>
           </li>
           <li>
             <a>Link</a>
           </li>
         </ul>
       </nav>
       <div className="container">
         <div className="row">
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <div className="panel panel-default">
               <div className="panel-body">Basic panel example</div>
               <div className="panel panel-default">
                 {/* Default panel contents */}
                 <div className="panel-heading">Panel heading</div>
                 <div className="panel-body">
                   <p>Text goes here...</p>
                 </div>
                 {/* Table */}
                 <table className="table">
                   <thead>
                     <tr>
                       <th>Heading 1</th>
                     </tr>
                     <tr>
                       <th>Heading 2</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>Content 1</td>
                     </tr>
                     <tr>
                       <td>Content 2</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
         <div className="ml-30">
           1+1 =2
            <a >
             <h2>
               a : {a} <br />
               b : {b} <br />
               a + b = { a+b }
               
             </h2>
             <h3>
               name : 
               {name}
             </h3>
           
           </a>
         </div>
       
         <br />
         <hr />
         { elements}
       </div>
      
     </div>
   );

    
    
    
   
    
  }
}


export default App;
