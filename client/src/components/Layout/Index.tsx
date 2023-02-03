import { Footer } from '../Footer'
import { Nav } from '../Nav'

export const Layout: React.FC = (children: any) => {
  return (
   <>
     <Nav/>
     {children}
     <Footer/>
   </>
  )
}
