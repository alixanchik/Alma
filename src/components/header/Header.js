import React from 'react';

import s from "./Header.module.css"

const Header = () => {
  return <div>
      <header>
          <div className={s.menu}>
          <ul>  
          <h1>alma</h1>
            <li>Get Started</li>
            <li>How it works</li>
            <li>For providers</li> 
            <li>About alma</li>


            <button className={s.btn}>Login</button>
           <button className={s.btn2}>Find a provider</button>
          
          </ul>
          <section className={s.easy}>
        <h2>
        alma makes it easy to find high<br></br> quality,afforable mental<br></br> health care.
        </h2>
        <button>  browse our directory</button>
      </section>
  
           <section className={s.the_end}>
              <h2>
              Subscribe to The Digest
              </h2> 
              <p>
              Get the latest mental health news in<br></br> your inbox every other Thursday.
              </p>
              <button>
              Sign Up
              </button>

           </section>
           <section className={s.want}>
             <h4>
             Want help? Talk to our                
             </h4>
             <h4>
             Client Matching team
             </h4>

           </section>
          </div>
     
     
      </header>
      
  </div>;
};

export default Header;
