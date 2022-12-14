import { Box } from "@chakra-ui/react"
import styles from '../../styles/components/cards/Cards.module.css'
import { Text } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import Button from "../button/Button"
// import Button from "@chakra-ui/react"
// import styles from '../../styles/components/footer/Footer.module.css'

const Cards = () => {
    return (
        <div>
            <Text fontSize="3xl" textTransform="capitalize" textAlign="center" fontWeight="bold"> buying on hypeindustry is simple!</Text>
            <div className={styles.container}>
                <Box display='flex' justifyContent='space-around' ml='8%' mt='50px'>
                    <Box display='flex' gap='50px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">1</Box>
                        <Box w='60%'><Text >Lorem ipsum dolor sit amet
                            nisi doloremque perferendis recusandae, quidem maxime ratione
                            what is your name may name is malik mudusar</Text></Box>
                    </Box>
                    <Box display='flex' gap='50px' ml='100px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">2</Box>
                        <Box w='60%'><Text>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Cum asperiores, enim voluptas tenetur et cupiditate ducimus animi fuga, modi illum vel ipsa? Dolor
                            nisi doloremque perferendis recusandae, quidem maxime ratione.</Text></Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-around' ml='8%' mt='50px'>
                    <Box display='flex' gap='50px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">3</Box>
                        <Box w='60%'><Text >Lorem ipsum dolor sit amet
                            nisi doloremque perferendis recusandae, quidem maxime ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis a illo perspiciatis expedita sint at fugiat corrupti, tempore dolores officiis unde velit sapiente possimus adipisicing elit. Distinctio delectus accusantium repudiandae, consequuntur veritatis temporibus officia doloremque cumque quasi nam nihil modi quod perferendis culpa voluptas molestiae aut. Quidem, consequuntur?
                        </Text></Box>
                    </Box>
                    <Box display='flex' gap='50px' ml='100px' mt='130px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">4</Box>
                        <Box w='60%'><Text>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Cum asperiores, enim voluptas tenetur et cupiditate ducimus animi fuga, modi illum vel ipsa? Dolor
                            nisi doloremque perferendis recusandae, quidem maxime ratione.</Text></Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-around' ml='8%' mt='50px'>
                    <Box display='flex' gap='50px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">5</Box>
                        <Box w='60%'><Text >Lorem ipsum dolor sit amet
                            nisi doloremque perferendis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia deserunt voluptatibus nulla fugiat recusandae, explicabo error minus culpa quidem nisi consectetur mollitia  recusandae, quidem maxime ratione</Text></Box>
                    </Box>
                    <Box display='flex' gap='50px' ml='100px' w='50%'>

                        <Box bg='black' h='45px' w='45px' color="white" borderRadius='50%' textAlign='center' fontWeight='bold' fontSize="2xl">6</Box>
                        <Box w='60%'><Text>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Cum asperiores, enim voluptas tenetur et cupiditate ducimus animi fuga, modi illum vel ipsa? Dolor
                            nisi doloremque perferendis recusandae, quidem maxime ratione.</Text></Box>
                    </Box>
                </Box>
                <Box textAlign='center' mt='70px' mb='50px'>

                    <Button buttonTitle="Learn more" color="green" extraStyle={{ padding: 20, color: 'reed', borderRadius: 40 }} />
                </Box>
                {/* <Button colorScheem='red'>learn more</Button> */}
            </div>
        </div>
    )
}
export default Cards