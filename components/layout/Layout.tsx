import React from 'react'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;