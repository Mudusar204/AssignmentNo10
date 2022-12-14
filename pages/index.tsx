import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import { border, Box } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import Button from '../components/button/Button'
import Accordion from '../components/accordion/Accordion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />


      <Box className={styles.sec1}>
        <Box ml='7%' className={styles.sec2}>
        </Box>
        <Box display='flex' alignItems='center' ml='7%' className={styles.sec3}>
          <Box>

            <Text fontSize='3xl' fontWeight='bold'>New marketplace that <br />
              allows you to buy in bulk</Text>
            <Text mt='20px' mb='20px'>Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/ <br />
              Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the <br />
              Footwear,Apparel & Accessory industry.</Text>
            <Button buttonTitle="Learn more" color="green" extraStyle={{ padding: 20, color: 'reed', borderRadius: 40 }} />
          </Box>

        </Box>
      </Box>



      <Box display='flex' justifyContent='center' gap='10px' mt='50px' mb='70px'>
        <Box w='40%' mr='30px'>
          <Image
            src="/page1/agri.png"
            alt='nav bar vali image'
            height={300}
            width={520}
          />
        </Box>
        <Box w='40%' borderLeft='1px'>
          <Box mt='5%' ml='10%'>
            <Text fontSize='2xl' fontWeight='bold'>Why HypeIndustry and what is it</Text>
            <br />
            <Text w='80%' color='grey'>Buy cheaper because of the bulk volume discount and resell
              worldwide to make a small margin and keep the volume and
              recurrence active! The key to make your money fast .</Text>


          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' gap='40px' mt='50px' mb='70px'>
        <Box w='40%' borderLeft='1px'>
          <Box mt='5%' ml='10%'>
            <Text w='80%' color='grey'>Buy cheaper because of the bulk volume discount and resell
              worldwide to make a small margin and keep the volume and
              recurrence active! The key to make your money fast .</Text>

            <br />
            <Text color='green'>Read More {">"}</Text>
          </Box>
        </Box>
        <Box w='40%'>
          <Image
            src="/page1/factory.png"
            alt='nav bar vali image'
            height={300}
            width={470}
          />
        </Box>
      </Box>
      <section>
       <Accordion/>
          
      </section>
      <Cards />
      <section>

      <Box display='flex' justifyContent='space-around'
        mt='20px' bg='whitesmoke' padding='60px'>
        <Box w='40%'>
          <Image
            src='/page1/Vector.png'
            alt='card img'
            width={40}
            height={40}
          />
          <Text fontSize='2xl' fontWeight='bold' mt='30px'> Shiping for Buyers</Text>
          <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui nemo doloremque sequi eaque, repellat nihil asperiores quidem facilis
            reiciendis iure consectetur, tempora </Text>
          <Text color='green' mt='30px'>Read more {">"} </Text>
        </Box>
        <Box w='40%'>
          <Image
            src='/page1/Vector (1).png'
            alt='card img'
            width={40}
            height={40}
            />
          <Text fontSize='2xl' fontWeight='bold' mt='30px'> Shiping for Sellers</Text>
          <Text mt='20px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui nemo doloremque sequi eaque, repellat nihil asperiores
            quidem facilis reiciendis iure consectetur, tempora </Text>
          <Text color='green' mt='30px'>Read more {">"}  </Text>

        </Box>
      </Box>
            </section>
      <Footer />
    </div>
  )
}

