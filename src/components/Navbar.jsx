import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar glass bg-info mb-2">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href='/'>Colorfy</a>
      </div>
      <div className="flex gap-2">
   
                         
              <div>
                <Link href="/docs">Docs</Link>
              </div>
              <div>

                <Link href="/devs">Devs</Link>
              </div>
   
      </div>
    </div>
  );
}

export default Navbar;
