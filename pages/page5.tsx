import Navbar from '../components/navbar/Navbar'
import { Accordion, Box } from '@chakra-ui/react'
// import Accordion from '../components/accordion/Accordion'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import {
    Accordion as ChakraAccordion,
    AccordionItem as ChakraAccordionItem,
    AccordionButton as ChakraAccordionButton,
    AccordionPanel as ChakraAccordionPanel,
    AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react'
const ShipingForSeller = () => {
    return (
        <div>
            <Navbar />
            <section >
                <Box display='flex' justifyContent='center' gap='40px' mb='30px' pb='50px' pt='50px'>
                    <Box w='40%' >
                        <Box ml='10%'>

                            <Text w='fit-content' fontSize='2xl' fontWeight='bold' pr='10px'>
                                Shipping for buyers
                            </Text>
                            <Text w='80%' color='grey' mt='3px'>Buy cheaper because of the bulk volume discount and resell
                                worldwide to make a small margin and keep the volume and
                                is dicta deleniti. Ut, id ex!</Text><br />
                            <Text color='gray'>We take care of all customs paperwork for you , so you can sleep well at
                                night!
                            </Text><br />
                            
                            <Text color='gray'> Sellers: Just pack the shoes, tape the box(es)properly with lots of
                                tape, request your labels via email, and relax! The rest will be taken
                                care of
                                1</Text>
                            <Text color='gray'>Buyers: Don t worry, we will make sure: a proper value, tariff code and
                                description are entered and that no problems occur from the time
                                packages leave the country and arrive in your country to clear
                                customs!</Text>
                        </Box>
                    </Box>
                    <Box w='40%'>
                        <Image
                            src="/page5/Group 5030 (2).png"
                            alt='nav bar vali image'
                            height={20}
                            width={390}
                        />
                    </Box>
                </Box>
            </section>
            <section className='2'>
        <Box display='flex' justifyContent='center' gap='40px' mb='40px' pb='10px' pt='10px'>
          <Box w='40%' mt='50px' pl='100px'>
            <Image
              src="/page5/Capture.PNG"
              alt='nav bar vali image'
              height={250}
              width={420}
            />
          </Box>
          <Box w='40%' >
            <Box mt='5%' ml='10%'>
              <Text fontSize='2xl' w='fit-content' fontWeight='bold'  >How much does shipping COST
              </Text>

              <Text w='80%' color='grey' mt='10px'>Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                recurrence active! The key to lit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text>
            </Box>
          </Box>
        </Box>
      </section>
            <section>

                <Box textAlign='center' bg='whitesmoke' mt='90px'  >

                    <Box textAlign='center' display='flex' justifyContent='center' >
                        <ChakraAccordion w='50%' mb='90px'>

                            <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px'>
                                            Can I change my shipping address once my order has been placed?
                                            <ChakraAccordionIcon />
                                        </Box>
                                    </ChakraAccordionButton>
                                </h2>
                                <ChakraAccordionPanel pb={4} color='blue'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </ChakraAccordionPanel>
                            </ChakraAccordionItem>

                            <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px' >
                                            Why does my billing and shipping address have to MATCH?
                                            <ChakraAccordionIcon />
                                        </Box>
                                    </ChakraAccordionButton>
                                </h2>
                                <ChakraAccordionPanel pb={4} color='blue'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </ChakraAccordionPanel>
                            </ChakraAccordionItem>
                            <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px'>
                                            Can I edit my order once I placed It?
                                            <ChakraAccordionIcon />
                                        </Box>
                                    </ChakraAccordionButton>
                                </h2>
                                <ChakraAccordionPanel pb={4} color='blue'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </ChakraAccordionPanel>
                            </ChakraAccordionItem>

                            <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px' >
                                            Can I change the Shipping Address AFTER the order has been placed?
                                            <ChakraAccordionIcon />
                                        </Box>
                                    </ChakraAccordionButton>
                                </h2>
                                <ChakraAccordionPanel pb={4} color='blue'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </ChakraAccordionPanel>
                            </ChakraAccordionItem> <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px'>
                                            How long does it take to ship?
                                            <ChakraAccordionIcon />
                                        </Box>
                                    </ChakraAccordionButton>
                                </h2>
                                <ChakraAccordionPanel pb={4} color='blue'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </ChakraAccordionPanel>
                            </ChakraAccordionItem>

                        </ChakraAccordion>
                    </Box>
                </Box>
            </section>
            <Footer />
        </div>
    )
}
export default ShipingForSeller