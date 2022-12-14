import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Cards from '../components/cards/Cards'
import {
    Accordion as ChakraAccordion,
    AccordionItem as ChakraAccordionItem,
    AccordionButton as ChakraAccordionButton,
    AccordionPanel as ChakraAccordionPanel,
    AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Button from '../components/button/Button'
import { Box } from '@chakra-ui/react'

const Shiping = () => {
    return (
        <div>
            <Navbar extraStyle={{ backgroundColor: 'whitesmoke' }} />
            <br /><br /><br />
            <Cards />
            <section>

                <Box textAlign='center' bg='whitesmoke' mt='90px'  >

                    <Box textAlign='center' display='flex' justifyContent='center' >
                        <ChakraAccordion w='50%' mb='90px'>

                            <ChakraAccordionItem>
                                <h2>
                                    <ChakraAccordionButton>
                                        <Box flex='1' textAlign='left' fontWeight='bold' pt='30px'>
                                            Can I order other items that are not offered on the platform? Do you offer pre order?
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
                                            Sizing
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
                                            Shipment Damage
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
                                            Minimum orders
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
                                            Taxes and Duties
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
export default Shiping