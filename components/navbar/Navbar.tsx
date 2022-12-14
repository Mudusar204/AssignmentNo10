import Image from "next/image"
import styles from '../../styles/components/navbar/Navbar.module.css'
import Link from 'next/link'

type navType = {
    
    extraStyle?: 
    {
    backgroundColor:string,
        },

}
const Navbar = (props:navType) => {
    return (
        <div style={props.extraStyle}>
            <div className={styles.d1}>
                <Link href='/'>
                <Image className={styles.img1}
                    src="/navImg.png"
                    alt='nav bar vali image'
                    height={70}
                    width={70}
                    
                    />
                    </Link>
                <div>
                    <ul className={styles.ul1}>
                        <li>
                        <Link href='/page2'>Hypeindustry</Link>
                            </li>
                        <li> <Link href='/page3'>Hype ofers</Link> </li>
                        <li><Link href='/page4'>Shippings</Link></li>
                        <li><Link href='/page5'>Seller Request Form</Link></li>
                        <li><Link href='/page6'>Guideline</Link></li>

                        <li style={{ display: "flex", gap: 7 }} className={styles.li1}><Image src="/loginIcon.png" alt="login img"
                            height={20} width={20} /><button style={{ border: 3, color: "black" }}>Login</button></li>
                        <li style={{ display: "flex", gap: 7 }} ><Image src="/searchicon.png" alt="login img"
                            height={20} width={20} />
                            <input type="text" placeholder="Search any thing" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar