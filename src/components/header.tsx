import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-yellow-600'>
        <div className="text-yellow-900 flex justify-between items-center p-4">
            <h1 className='text-3xl hover:text-white'>COFFEE SHOP</h1>
            <ul className='flex gap-4 cursor-pointer'>
               <Link href='/' className='hover:text-white underline'>HOME</Link>
               <Link href='/menu' className='hover:text-white underline'>MENU</Link>
               <Link href='/order' className='hover:text-white underline'>ORDER</Link>
               <Link href='/about' className='hover:text-white underline'>ABOUT</Link>
               <Link href='/contact' className='hover:text-white underline'>CONTACT US</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header