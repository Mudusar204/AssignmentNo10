import Navbar from '../components/navbar/Navbar'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
const HypeOffer = () => {
  return (
    <div>
      <Navbar extraStyle={{backgroundColor:'whitesmoke'}} />
      <section className='1'>
        <Box display='flex' justifyContent='center' gap='40px' mb='70px' bg='whitesmoke' pb='50px' pt='50px'>
          <Box w='40%' >
            <Box mt='5%' ml='10%'>
              <Text fontSize='2xl' w='fit-content' fontWeight='bold' color='white' bg='black' pl='10px' pr='10px'>Why HypeIndustry and what is it
              </Text>
              <Text mt='2px' w='fit-content' fontSize='2xl' fontWeight='bold' color='white' bg='black' pl='10px' pr='10px'>
                exactly?
              </Text>
              <Text w='80%' color='grey' mt='30px'>Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                recurrence active! The key to make your money fast .
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text>

            </Box>
          </Box>
          <Box w='40%'>
            <Image
              src="/page 2/1stSectionImg.png"
              alt='nav bar vali image'
              height={250}
              width={420}
            />
          </Box>
        </Box>
      </section>
      <section className='2'>
        <Box display='flex' justifyContent='center' gap='40px' mb='40px' pb='10px' pt='10px'>
          <Box w='40%' mt='30px' pl='100px'>
            <Image
              src="/page 2/section2Img.png"
              alt='nav bar vali image'
              height={250}
              width={420}
            />
          </Box>
          <Box w='40%' >
            <Box mt='5%' ml='10%'>
              <Text fontSize='2xl' w='fit-content' fontWeight='bold' color='white' bg='black' p='7px'>20 years of relationships + experience
              </Text>

              <Text w='80%' color='grey' mt='20px'>Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                recurrence active! The key to lit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text>
            </Box>
          </Box>
        </Box>
      </section>
      <section className='3'>
        <Box display='flex' justifyContent='center' gap='40px' mb='70px' bg='whitesmoke' pb='50px' pt='50px'>
          <Box w='40%' >
            <Box mt='5%' ml='10%'>
              <Text fontSize='2xl' w='fit-content' fontWeight='bold' pl='10px' pr='10px'>Always the same issue through the
              </Text>
              <Text mt='2px' w='fit-content' fontSize='2xl' fontWeight='bold' pl='10px' pr='10px'>
                years
              </Text>
              <Text w='80%' color='grey' mt='30px'>Buy cheaper because of the bulk volume <br /> <br /> discount and resell
                worldwide to make a small margin and keep the volume and
                recurrence active! The key to make your money fast .
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto <br /> <br /> enim? Illum omnis dicta deleniti. Ut, id ex!</Text>

            </Box>
          </Box>
          <Box w='40%' display='flex' gap='20%' ml='60px'>
            <Box mt='90px'>

              <Image

                src="/page 2/section3Img.png"
                alt='nav bar vali image'
                height={100}
                width={150}
              />
            </Box>
            <Image
              src="/page 2/section2Img2.png"
              alt='nav bar vali image'
              height={110}
              width={200}
            />

          </Box>
        </Box>
      </section>
      <section className='4'>
        <Box display='flex' justifyContent='center' gap='40px' mt='-70px' bg='whitesmoke' pb='50px' pt='50px'>
          <Box w='40%' mt='30px'>
            <Image
              src="/page 2/section4Img.png"
              alt='nav bar vali image'
              height={290}
              width={450}
            />
          </Box>
          <Box w='40%' >
            <Box mt='5%' ml='10%'>

              <Text mt='2px' w='fit-content' fontSize='2xl' fontWeight='bold' pr='10px'>
                Utopia
              </Text>
              <Text w='80%' color='grey' mt='30px'>Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                recurrence active! The key to make your money fast . <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text>

            </Box>
          </Box>
        </Box>
      </section>
      <section className='5'>
        <Box display='flex' justifyContent='center' gap='40px' mb='30px' pb='50px' pt='50px'>
          <Box w='40%' >
            <Box ml='10%'>

              <Text w='fit-content' fontSize='2xl' fontWeight='bold' pr='10px'>
                Reality
              </Text>
              <Text w='80%' color='grey' mt='3px'>Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                ipisicing elit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text><br />
              <Text>So, as a store owner, we see 3 options :
              </Text><br />
              <Text color='gray'> 1.  Sell all your sleeping inventory on certain platforms one by one etc.
                (and for sure , some models will not even sell ...so it s a loss).Shipping
                will take a while, and you are wasting time & labor...
                1</Text>
            </Box>
          </Box>
          <Box w='40%'>
            <Image
              src="/page 2/section5Img.png"
              alt='nav bar vali image'
              height={20}
              width={490}
            />
          </Box>
        </Box>
      </section>
      <section className='6'>
        <Box display='flex' justifyContent='center' gap='40px' mb='30px'>
          <Box w='40%' pl='50px'>
            <Image
              src="/page 2/section6Img.png"
              alt='nav bar vali image'
              height={20}
              width={500}
            />
          </Box>
          <Box w='40%' >
            <Box ml='10%'>

              <Text color='gray'> 2.  Sell all your sleeping inventory on certain platforms one by one etc.
                (and for sure , some models will not even sell ...so it s a loss).Shipping
                will take a while, and you are wasting time & labor...
                1</Text>
              <br />

              <Text w='80%' color='grey' mt='3px'> 3. Buy cheaper because of the bulk volume discount and resell
                worldwide to make a small margin and keep the volume and
                ipisicing elit. Animi, ex quos sed laborum in asperiores cupidi
                tate, architecto enim? Illum omnis dicta deleniti. Ut, id ex!</Text>

            </Box>
          </Box>
        </Box>
      </section>
      <Text mt='60px' fontSize='3xl' textAlign='center' fontWeight='bold' >The PROS of such platform</Text>
      <section>
        <Box display='flex' justifyContent='space-evenly'
          mt='20px' padding='60px'>
          <Box w='25%'>
            <Image
              src='/page1/Vector.png'
              alt='card img'
              width={40}
              height={40}
            />
            <Text fontSize='2xl' fontWeight='bold' mt='30px'>SHIPPING </Text>
            <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui nemo doloremque sequi eaque, repellat a </Text>
          </Box>
          <Box w='25%'>
            <Image
              src='/page1/Vector.png'
              alt='card img'
              width={40}
              height={40}
            />
            <Text fontSize='2xl' fontWeight='bold' mt='30px'> ANONYMITY</Text>
            <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui nemo doloremque sequi eaque, repellat  </Text>
          </Box>
          <Box w='25%'>
            <Image
              src='/page1/Vector (1).png'
              alt='card img'
              width={40}
              height={40}
            />
            <Text fontSize='2xl' fontWeight='bold' mt='30px'> BRAND INTEGRITY</Text>
            <Text mt='20px'>Lorem ipsum dolor sit at nihil asperiores
              quidem facilis reiciendis iure consectetur, tempora </Text>

          </Box>
        </Box>
      </section>
      <section>
        <Box display='flex' justifyContent='space-evenly'
          mt='' p='60px' pt='0'>
          <Box w='25%'>
            <Image
              src='/page1/Vector.png'
              alt='card img'
              width={40}
              height={40}
            />
            <Text fontSize='2xl' fontWeight='bold' mt='30px'> FREEDOM
            </Text>
            <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui nemo doloremque sequi eaque, repellat nihil asperiores quidem facilis
              reiciendis iure consectetur, tempora </Text>
          </Box>
          <Box w='25%'>
            <Image
              src='/page1/Vector.png'
              alt='card img'
              width={40}
              height={40}
            />
            <Text fontSize='2xl' fontWeight='bold' mt='30px'> FLA$H FLIPPING”</Text>
            <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui nemo doloremque sequi eaque, repellat nihil asperiores quidem facilis
              reiciendis iure consectetur, tempora </Text>
          </Box>
          <Box w='25%'>

          </Box>
        </Box>
      </section>
      <Footer />
    </div>
  )
}
export default HypeOffer