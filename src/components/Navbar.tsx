import styles from "../css/landingPage.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
            <span className={styles.home}>SUCCULENT</span>
          </li>
          <div className={styles.rest_li}>
            <li>
              <span
                onClick={() =>
                  (window.location.href = "https://github.com/gaki2")
                }
              >
                CONTACT
              </span>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
