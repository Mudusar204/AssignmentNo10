import { Flex } from '@chakra-ui/react'
import { ClassNames } from '@emotion/react'
import styles from '../../styles/components/footer/Footer.module.css'

const Footer = () => {
    return (
        <div>
<div className={styles.d1}>

        <div className={styles.d2}>
            <div>
                <h2 className={styles.heading}>Hypeindustry</h2>
                <li>Hypeindustry concept</li>
                <li>buying Guide</li>
                <li>selling Guide</li>
            </div>
            <div>
                <h2 className={styles.heading}>Hype Offers</h2>
                <li>Footwear</li>
                <li>apparel</li>
                <li>accessories</li>
            </div>
            <div>
                <h2 className={styles.heading}>shipping</h2>
                <li>shipping for buyers</li>
                <li>shipping for seller</li>
            </div>
            <div className={styles.d4}>
                <h2 className={styles.heading}>contect us</h2>
                <li style={{color:"green"}}>malikmudusar@gamil.com</li>
                <li style={{color:"green"}}>ranatayyab@gamil.com</li>
            </div>
        </div>
<div className={styles.d3}></div>
<p className={styles.p1}>&copy; 2022 Hypeindustry</p>
        </div>
</div>
    )
}
export default Footer