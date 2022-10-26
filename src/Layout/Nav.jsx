import React from 'react';

function Nav() {
  return (
    <nav className="w-1/4 h-20 boorder-3 absolute z-10 bg-gold m-auto">
      <ul className="flex justify-center items-center gap-2">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;
