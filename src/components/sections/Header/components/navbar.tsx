import { useState } from 'react'
import './navbar.css'
import logo from '@/assets/logo.svg'


interface menuInterface {
  label: string,
  url: string
}

export const NavBar = () => {
  const [menu, setMenu] = useState<menuInterface[]>([
    {  label: 'Destinations', url: '#'},
    {  label: 'Hotels', url: '#'},
    {  label: 'Flights', url: '#'},
    {  label: 'Bookings', url: '#'},
    {  label: 'Login', url: '#'},
  ])

  const menuElements: JSX.Element[] = []
  menu.forEach((items) => {
    menuElements.push(<a href={items.url} className="h-[30px] flex justify-center items-center px-2 py-2 text-sm font-medium text-black hover:text-gray-400">{items.label}</a>)
  })

  return (
    <div className="flex justify-between items-center w-full px-2 py-2 max-h-14">
      <div><img src={logo} alt='Icon' /></div>
      <div className="flex space-x-7 items-center">
        {menuElements}
        <a href="#" className="h-[30px] flex justify-center items-center px-2 py-2 text-sm font-medium text-black hover:text-gray-400 rounded-md border border-gray-500">Sign Up</a>
        <a href="#" className="px-2 py-2 text-sm font-medium text-black hover:text-gray-400">EN</a>
      </div>
    </div>
  )
}