import React from 'react';

function Student(props) {
    console.log(props.name);
  return (
    <div>
   
      <h1>Student is: {props.name}</h1>
      <h2>Mail Id is:  {props.email}</h2>
      {/* <h2>Address is:  {props.address.Atpost}</h2> */}
      
    </div>
  );
}

export default Student;
