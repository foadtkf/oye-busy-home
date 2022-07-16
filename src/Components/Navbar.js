import React from 'react';
import downloadapp from "../images/DownloadApp.png"
import logo from "../images/logo.png"
const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start hidden lg:block">
    <ul class="menu menu-horizontal p-0">
      <li className='hidden lg:block'>
    <a class=" normal-case text-xl"><img src={logo} className="w-full lg:w-20"  alt=""/></a>
      </li>
      <li><a className='text-sm font-bold'>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</a></li>
    </ul>
  </div>
  <div class="navbar-center block lg:hidden w-full">
    <ul class="menu menu-horizontal p-0">
      <li><a className='text-sm font-bold'>1st Floor, H 3567, Block B, Sector 22, Noida, Uttar Pradesh 201301</a></li>
    </ul>
  </div>
  <div class="navbar-end hidden lg:block">
    <ul class="menu menu-horizontal p-0">
      <li><a>Blog</a></li>
      <li><a>Career</a></li>
      <li tabindex="0">
        <a>
          My Account
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg></a></li>
      <a><img src={downloadapp} className="w-44" style={{marginTop:'3%'}} alt=""/></a>
    </ul>
  </div>
</div>
    );
};

export default Navbar;