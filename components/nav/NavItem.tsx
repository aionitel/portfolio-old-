import Link from 'next/link';
import React from 'react'

interface NavItemProps {
  data: {
    title: string;
    path: string;
  }
}

const NavItem: React.FC<NavItemProps> = ({ data }) => {
  return (
    <Link href={data.path} passHref>
      <h1>{data.title}</h1>
    </Link>
  )
}

export default NavItem;