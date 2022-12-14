import {
    Accordion as ChakraAccordion, 
    AccordionItem as ChakraAccordionItem,
    AccordionButton as ChakraAccordionButton,
    AccordionPanel as ChakraAccordionPanel,
    AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Button from '../button/Button'
import { Box } from '@chakra-ui/react'
const Accordion = () => {
    return (
        <div>
            <section>

            <Box textAlign='center' bg='whitesmoke' >
                <Text fontWeight='bold' fontSize='3xl' pt='40px' pb='40px'>Selling on HyperIndustry</Text>
                <Box display='flex' justifyContent='center'>

                    <Box display='flex' justifyContent='center' gap='40px' bg='white' >
                        {/* <ul style={{ listStyle: "none" }}> */}

                        <li style={{ listStyle: 'none' }}><Button color='green' extraStyle={{ padding: 10, color: 'white', borderRadius: 0 }} buttonTitle='Become a Seller' /></li>
                        <li style={{ listStyle: 'none' }}><Button color='white' extraStyle={{ padding: 10, color: 'black', borderRadius: 0 }} buttonTitle='Create a listing' /></li>
                        <li style={{ listStyle: 'none' }}><Button color='white' extraStyle={{ padding: 10, color: 'black', borderRadius: 0 }} buttonTitle='Seller Fees' /></li>
                        <li style={{ listStyle: 'none' }}><Button color='white' extraStyle={{ padding: 10, color: 'black', borderRadius: 0 }} buttonTitle='Condition of Items' /></li>

                        {/* </ul> */}
                    </Box>
                </Box>
                <Box textAlign='center' display='flex' justifyContent='center'>
                    <ChakraAccordion w='50%'>

                        <ChakraAccordionItem>
                            <h2>
                                <ChakraAccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight='bold' pt='30px'>
                                        How do I sell on HypeIndustry?
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
                                        I requested to become a SELLER, how long will it take to get approved?
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
                                        How do I delete my Account?
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
                                        Can I share my seller privileges with others?
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
                                        Can I create several Seller Accounts?
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

                        <ChakraAccordionItem mb='70px'>
                            <h2>
                                <ChakraAccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight='bold' pt='30px' >
                                        How do I become a seller if I have a store outside the USA?
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
        </div>
    )
}
export default Accordion