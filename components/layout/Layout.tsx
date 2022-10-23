import React from 'react'
import Header from '../header/Header';
import Footer from './Footer';

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout;