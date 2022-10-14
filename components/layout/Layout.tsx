import React from 'react'
import Header from '../header/Header';

const Layout: React.FC = ({ children }: any) => {
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