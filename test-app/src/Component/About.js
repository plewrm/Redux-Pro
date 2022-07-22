import React from 'react';
import {NavLink, Link} from 'react-router-dom'


function About() {
  return (
    <div>
      <h1>About Page</h1>
      <h2>"The Company is not for Occupation of the Loyalty"</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis facere provident rem distinctio itaque aliquam dolorum 
            corrupti necessitatibus impedit, ex ducimus expedita adipisci recusandae voluptates dolore, odio veniam reprehenderit modi ad
            molestias? Itaque minus earum, soluta aperiam quibusdam saepe, tenetur autem nihil tempora obcaecati cupiditate nobis? Corrupti, 
            facere ut. Officia placeat voluptas eius quaerat accusamus ipsa labore rerum molestiae enim sit iure nobis necessitatibus libero, 
            incidunt sunt corrupti ipsam facilis adipisci laboriosam impedit dicta architecto sint? Consequuntur autem quibusdam non quaerat, 
            odit quo vitae obcaecati excepturi dolorum? Dolorum delectus ea sit fuga, temporibus ad doloribus eaque aliquid voluptates 
            pariatur nulla! <NavLink to="/">Go To Home</NavLink></p>
    </div>
  );
}

export default About;