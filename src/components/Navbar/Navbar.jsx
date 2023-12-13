import styles from './Navbar.module.css';
import logo from './logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export function Navbar() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li><a href='#' className={styles.link}>Entre</a></li> |
            <li><a href='#' className={styles.link}>Cadastrar</a></li>
          </ul>
        </nav>
        <div className={styles.containerLogo}>
          <div className={styles.boxBrandLogo}>
            <img className={styles.logo} src={logo} />
            <h1 className={styles.brand}>GatStore</h1>
          </div>
          <div className={styles.containerSearch}>
            <input placeholder="Buscar na GatStore" className={styles.search} type="text" />
            <SearchIcon className={styles.iconSearch} />
            <AddShoppingCartIcon className={styles.iconShopping} />
          </div>
        </div>
      </div>
    </header>
  )
}