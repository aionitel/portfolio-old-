import React from 'react'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex justify-center align-center min-h-screen max-w-5xl mx-auto'>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;