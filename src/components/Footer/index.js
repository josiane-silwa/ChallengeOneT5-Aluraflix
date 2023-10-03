import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer(){
  return(
      <footer className={styles.footer}>
        <Link to='/'><img src="" width="100" alt="" /></Link>
        <div>
          <p>Aluraflix <a href="https://github.com/josiane-silwa"></a> &copy;2023 </p>
        </div>
      </footer>
    )
}

export default Footer;