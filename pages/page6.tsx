import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import {
    Accordion as ChakraAccordion,
    AccordionItem as ChakraAccordionItem,
    AccordionButton as ChakraAccordionButton,
    AccordionPanel as ChakraAccordionPanel,
    AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
const Guidelines = () => {
    return (

        <div>
            <Navbar extraStyle={{backgroundColor:'whitesmoke'}} />
            <Box bg='whitesmoke' >

            <Box ml='20%' pt='60px' >
                <Text fontSize='2xl' fontWeight='bold'>How do I get my prepaid shipping LABELS?</Text><br />

                <Text>Once you have approved the purchase, you can request for your labels by email at shipping@hypeindustry.com</Text><br />
                <Text>We take care of all customs paperwork for you , so you can sleep well at night!
                </Text><br />
                <ol>
                    <li>Buyer s details in full, name , full address and invoice number.
                    </li>
                    <li>Box count and if possible boxes dimension</li>
                    <li>Total pairs shipped, no need for weight</li>
                    <li>Pick up requested yes or no , and address for pick up if needed
                    </li>
                </ol>
                <br />
                <Text>Labels are then emailed to you within 24h/48h. You can drop the boxes at an authorized shipper or request a pick-up. We can <br />
                    either schedule the pick-up for you, during your opening hours, or, you can request the pick-up yourself at your own discretion!</Text>
                <br />
            </Box>
            <Box ml='20%' mt='20px'>
                <Text fontSize='2xl' fontWeight='bold' mb='10px'>How do I pack the items I have SOLD?</Text>
                <br />  <Text>This process is very easy! We suggest using standard Nike or Adidas boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 <br />
                    prs per box. If you unfold boxes properly you may be able to fit an extra pair or two! Check out this video we found (we are not <br />
                    in that video or know anyone in this video) it is a tutorial for sellers who do not know how to flatten shoe boxes. With this <br />
                    method you can pack 14 to 15 pairs versus 12 pairs per box:</Text>
                    <Box display='flex' justifyContent='center' mt='30px' mb='20px' mr='260px'>
                        <Image
                        src='/page6/Group 5036.png'
                        alt='end wali pic'
                        height={200}
                        width={350}
                        />
                        
                    </Box>
<Text mt='20px' mb='70px'>Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, that are not foldable! For example, certain <br />
pair of shoes like Jordan retro boxes do not fold and certain adidas consortium do not fold as well so please be very careful!</Text>
            </Box>
                        </Box>
            <Footer />
        </div>
    )

}
export default Guidelines