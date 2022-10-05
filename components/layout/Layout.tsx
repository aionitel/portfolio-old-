import React from 'react'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex min-h-screen min-w-screen justify-center'>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;