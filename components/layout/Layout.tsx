import React from 'react'
import Header from '../header/Header';

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex justify-center align-center min-h-screen max-w-5xl mx-auto font-inter'>
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout;