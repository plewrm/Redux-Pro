//React Practice program
import {useEffect} from 'react'

import React from 'react'

function App() {
  useEffect(()=>{

  },[]);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App









































































// import React from 'react';
// import {BrowserRouter,Routes, Route} from 'react-router-dom'
// import Home from './Component/Home'
// import About from './Component/About'
// import './App.css'
// import Navbar from './Component/Navbar';

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//       </Routes>
     
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;





// import React from 'react';
// // import {Table, TableCell,TableHead, TableRow} from 'react-bootstrap/Table';
// import Table from 'react-bootstrap/Table';
// import { TableHead, TableRow, TableCell } from '@mui/material';
// import './App.css'
// function App() {
//   const names = [
//     {name: 'Pawan', email: 'Pawan@666Gmail.com', contact:'1212321233', address:[{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"}]},
//     {name: 'Pawan', email: 'Pawan@666Gmail.com', contact:'1212321233',address:[{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"}]},
//     {name: 'Pawan', email: 'Pawan@666Gmail.com', contact:'1212321233',address:[{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"}]},
//     {name: 'Pawan', email: 'Pawan@666Gmail.com', contact:'1212321233',address:[{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"}]},
//     {name: 'Pawan', email: 'Pawan@666Gmail.com', contact:'1212321233',address:[{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"},{Hn: "110",City:'Pune', Country:"India"}]}
//   ]
//   // const user=[
//   //   { name:'Pawan', email: 'Pasalve@gmail.com',Address: [
//   //       {Hn:'10',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'20',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'40',city:'Pune', state:'Maharashtra', Country: 'India'}
//   //     ]
//   //   },
//   //   { name:'Prakash', email: 'Pasalve@gmail.com',Address: [
//   //       {Hn:'10',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'20',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'40',city:'Pune', state:'Maharashtra', Country: 'India'}
//   //     ]
//   //   },
//   //   { name:'Tanishq', email: 'Pasalve@gmail.com',Address: [
//   //       {Hn:'10',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'20',city:'Pune', state:'Maharashtra', Country: 'India'},
//   //       {Hn:'40',city:'Pune', state:'Maharashtra', Country: 'India'}
//   //     ]
//   //   },

//   // ]y
  
//   return (
//     <div className='App'>
//       <h1>Table Nasted</h1>
//       <Table className='table-data' responsive>
//           <TableHead>
//             <TableRow>
//               <TableCell> Sr.No.</TableCell>
//               <TableCell> Name</TableCell>
//               <TableCell> Email</TableCell>
//               <TableCell>Contact </TableCell>
//               <TableCell>Address </TableCell>
              
              
//             </TableRow>
//             {
//               names && names.map((DataList, id) => (
//                 <TableRow key={id}>
//                   <TableCell className='Table-Data'>{id + 1}</TableCell>
//                   <TableCell className='Table-Data'>{DataList.name}</TableCell>
//                   <TableCell className='Table-Data'>{DataList.email}</TableCell>
//                   <TableCell className='Table-Data'>{DataList.contact}</TableCell>
//                   <TableCell className='Table-Data'>
//                   <Table variant="dark">
//                   <TableRow>
//               <TableCell> Sr.No.</TableCell>
//               <TableCell> Hn</TableCell>
//               <TableCell> City</TableCell>
//               <TableCell>Country </TableCell>
              
              
//             </TableRow>
//                      {
//                      DataList.address.map((index,i)=>
//                       <TableRow key={i}>
//                          <TableCell className='Table-Data'>{i + 1}</TableCell>
//                         <TableCell>{index.Hn}</TableCell>
//                         <TableCell>{index.City}</TableCell>
//                         <TableCell>{index.Country}</TableCell>
//                       </TableRow>
//                      )
//                      }
//                   </Table>
//                   </TableCell>
                  
//                 </TableRow>
//               ))

//             }
//           </TableHead>
//         </Table>
//       {/* <table>
//         <tbody>
//           <tr>
//           <th>name</th>
//           <th>email</th>
//           <th>contact</th>
//          </tr>
//          </tbody>
//       {
//         names && names.map((item)=>{
//           <tr>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//           </tr>
//         })
//       }
       
//      </table> */}
//     </div>
//   );
// }

// export default App;





// import React,{Fragment, useEffect, useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import './App.css'
// function App() {
//   const [uid, setuid]= useState(" ")
//   const [password, setpassword]= useState(" ")
//   const [userErr, setuserErr]= useState(false)
//   const [passErr, setpassErr]= useState(false)
// const loginHandle  =(e)=>{
//   if (uid.length<3 || password.length<3)
//   {
// alert("Please correct value insert")
//   }
//   else
//   {
//     alert("All is good")
//       }
// e.preventDefault()

// }
// function userHandler(e){
//   let item= e.target.value
// if(item.length<3)
// {
//   setuserErr(true)
//   console.log("Invalid");
// }
// else
// {
//   setuserErr(false)
// }
// setuid(item)
// }

// function passwordHandler(e){
//   let item= e.target.value
// if(item.length<3)
// {
//   setpassErr(true)
//   console.log("Invalid");
// }
// else
// {
//   setpassErr(false)
// }
// setpassword(item)
// }
//   return (
//     <Fragment>
// <div className='App'>
//      <h1>Login form</h1>
     
//      <form onSubmit={loginHandle}>
//       <input type='text' placeholder='Enter User Id' onChange={userHandler} />{userErr?<h4>Not valid</h4>: " "}<br></br><br></br>

//       <input type='password' placeholder='Password' onChange={passwordHandler} ></input>{passErr?<h4>Not valid</h4>: " "}<br></br><br></br>
      
//       <Button variant="primary" type="submit" value="Submit">Login</Button>{' '}
//      </form>
//     </div>

//     </Fragment>
    
//   );
// }

// export default App;




// form creation
// import React,{useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import './App.css'
// function App() {
//   const [name, setName]= useState(" ")
//   const [intrest, setIntrest]= useState("")
//   const [tnc, setTnc]= useState(true)
// const getFormData =(e)=>{
//   console.log(name, tnc, intrest);
// e.preventDefault()
// }

//   return (
//     <div className='App'>
//      <h1>Headline of form</h1>
//      <form onSubmit={getFormData}>
//       <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
//       <select onChange={(e)=>setIntrest(e.target.value)} className="form-select" aria-label="Default select example">
//        <option selected>Open this select menu</option>
//        <option value="1">One</option>
//        <option value="2">Two</option>
//        <option value="3">Three</option>
//   </select>
  
//       <br></br><br></br> 
//       <input onChange={(e)=>setTnc(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//       <label className="form-check-label" for="flexCheckDefault">Default checkbox</label><br></br><br></br>
//       <Button variant="primary" type="submit" value="Submit">Add</Button>{' '}
//      </form>
//     </div>
//   );
// }

// export default App;





// import React,{useState} from 'react';
// import './App.css'
// function App() {
//   const [data, setData]= useState(true)


//   return (
//     <div className='App'>
//       {
//         data? 
//       <h1>Hello Welcome</h1>
// : null
//       }
      
//       <button onClick={()=>setData(!data)}>Click</button>
//     </div>
//   );
// }

// export default App;





// import React,{useState} from 'react';
// import './App.css'
// function App() {
//   const [data, setData]= useState()
//   const [print, setPrint]= useState(false)
//   function getData(e){
//        console.log(e.target.value);
//        setData(e.target.value)
//        setPrint(false)
//   }
//   return (
//     <div className='App'>
//       <h1>Hello Welcome</h1>
//       {
//         print ?
//         <h2>{data}</h2>
//         : null
//       }
//       <input type="text" onChange={getData}></input><br></br><br></br>
//       <button onClick={()=>(setPrint(true))}>Click</button>
//     </div>
//   );
// }

// export default App;





// import { useEffect, useState } from 'react'
// import React from 'react'
// import "./App.css"
// import Student from './Student'
// function App() {
  
//   const [name, setName]= useState("Pawan Vasant Salve")
//   const apple=()=>{
//     setName("Pavan VasantSalve")
//   }
//   return (
//     <div className="App">
//       <h1>Hello this Check</h1>
//       {/* <>{data}</><br></br> */}
//      <Student name={name}/>
//       {/* <Student /> */}
//       {/* <Student name={"Pawan Vasant Salve"} email={"pawansalve555@gmail.com"} address={{Atpost:'waladgaon',Tal:'Shrirampur', Dist:'Anagar',State:'Maharashtra', Country:'India', Pin:'413543'}}/> */}
//       {/* <button onClick={()=>setName("Pavan Vasant Salve")} >Click Here</button> */}
//       <button onClick={apple} >Click Here</button>
//     </div>
//   )
// }
// export default App

