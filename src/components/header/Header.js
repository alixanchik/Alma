import React from 'react';

const Header = () => {
  return <div>
      <header className="menu">
        <ul>
          <div>
          <li><a href="#">alma</a></li>
          </div>
          
          <li><a href="#">Get Started</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">For providers</a></li> 
           <li><a href="#">About alma</a></li>
           <div className='button'>
           <button >Login</button>
           <button>Find a provider</button>
           </div>

        </ul>
        <section>
        <h1>
        alma makes it easy to find high<br></br> quality,afforable mental<br></br> health care.
        </h1>
      </section>
     
      </header>
      
  </div>;
};

export default Header;
