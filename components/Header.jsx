import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const Header = () => {

  const headerItems = [{name:'Blog'},]

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-grey-400 py-8">
        <div className="md:float-left block">
          <Link href="/" passHref={true}>
            <span className="cursor-pointer font-bold text-4xl text-black">Beeza</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {headerItems.map((headerItem, index) => (
            <Link key={index} href="https://blog.beeza.space/" passHref={true}><span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{headerItem.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;