import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function HomeTemplate() {
  return (
    <div>
        <Header/>
        <div className='content'>
            {/* load các nội dung của component dùng thiết kế HomeTemplate */}
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
