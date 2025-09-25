import React from 'react';
import navImg from '../../assets/logo.png'
import iconImg from '../../assets/Icon.png'
const Navbar = () => {
    return (
          <div className="navbar w-11/12 mx-auto">
          <div className="flex-1">
            <a className=" text-xl">
              <img className='w-[60px] h-[60px]' src={navImg} alt=''/>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>0</span>
            <span>Coin</span>
            <img src={iconImg} alt=''/>
          </div>
        </div>
    );
};

export default Navbar;