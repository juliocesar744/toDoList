import logo from '../assets/Logo.svg'

import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.header}>
            <img src={logo} alt="LogoTipo" className={styles.logo}/>
        </div>
    )
}

export default Header;