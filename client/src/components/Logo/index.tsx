import { Link } from '@mui/material'
import React from 'react'

export const Logo: React.FC = () => {
  return (
    <Link href='/'>
       <img style={{width:'60px', height:'60px', borderRadius:'16px'}} src='/images/stadium.gif'/>
    </Link>
   
  )
}
