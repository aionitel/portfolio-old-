import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='transition-all duration-300'>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout;