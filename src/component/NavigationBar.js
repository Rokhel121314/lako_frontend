import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/style.module.css';
import {FaUserAlt} from 'react-icons/fa'
import { BsInboxesFill } from "react-icons/bs"
import { MdPointOfSale } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"
import { FcSalesPerformance } from "react-icons/fc"

export function NavigationBar() {
  return (
    <>
    {/* custom navigation */}
    <nav>
      <div className={styles.navBrand}>
        <Link to="/" className={styles.navBrand}>LAKO</Link>
      </div>
      <div className={styles.navList}>
        <Link to="/" className={styles.navItem}>STOCKS</Link>
        <Link to="/pos" className={styles.navItem}>POS</Link>
        <Link to="/transaction" className={styles.navItem}>TRANSACTION</Link>
        <Link to="/sales" className={styles.navItem}>SALES</Link>
        <Link to="/user" className={styles.navItem}>USER <FaUserAlt/></Link>

        <Link to="/" className={styles.navIcon}><BsInboxesFill/></Link>
        <Link to="/pos" className={styles.navIcon}><MdPointOfSale/></Link>
        <Link to="/transaction" className={styles.navIcon}><GrTransaction/></Link>
        <Link to="/sales" className={styles.navIcon}><FcSalesPerformance/></Link>
        <Link to="/user" className={styles.navIcon}><FaUserAlt/></Link>


      </div>
    </nav>
  </>
  )
}

