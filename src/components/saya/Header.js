import styles from  "../../styles/saya/Header.module.css";

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        <h1 className={ styles.title }>ガジェログ</h1>
      </div>
      <nav className={ styles.nav }>
        <ul className={ styles.nav_menu }>
          <li className={ styles.nav_menu_item }><a href="/">Home</a></li>
          <li className={ styles.nav_menu_item }><a href="/about">AboutUs</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header