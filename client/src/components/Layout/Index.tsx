import { Footer } from '../Footer'
import { Nav } from '../Nav'

export const Layout = (children: any) => {
  return (
   <>
     <Nav/>
     {children}
     <Footer/>
   </>
  )
}
