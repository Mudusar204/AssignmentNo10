import Navbar from '../components/navbar/Navbar'
// import { Accordion, Box } from '@chakra-ui/react'
import Accordion from '../components/accordion/Accordion'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
const SellerRequestForm=()=>{
    return(
        <div>
<Navbar extraStyle={{backgroundColor:'whitesmoke'}}/>
<Accordion/>
<Footer/>
        </div>
    )
}
export default SellerRequestForm