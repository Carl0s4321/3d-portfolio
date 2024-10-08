import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} style={{ transition: 'top 0.3s' }}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO AND NAME */}
        <Link to="/" className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Carlos Sujanto</p>
        </Link>

        {/* NAVBAR LINKS look at index.js */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>


        {/* MOBILE */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=> setToggle(!toggle)}/>
        </div>

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={()=> {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
        

    </nav>
  )
}

export default Navbar