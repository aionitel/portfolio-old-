import React from 'react'
import Header from '../header/Header';

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout;