import styles from "../css/landingPage.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
            <span className={styles.home}>HOME</span>
          </li>
          <div className={styles.rest_li}>
            <li>
              <span>CONTACT</span>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
