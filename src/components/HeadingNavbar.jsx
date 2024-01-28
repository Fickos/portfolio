import React, { useState, useEffect } from "react";
import styles from "../styles/HeadingNavbar.module.scss";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const navOptions = ["Home", "Projects", "Hobby projects"];

export default function HeadingNavbar() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent scrolling if mobile menu is open!

    useEffect(() => {
        if (mobileMenuOpen) {
            disableBodyScroll(window);
        } else {
            enableBodyScroll(window);
        }
        return () => {
            enableBodyScroll(window);
        };
    }, [mobileMenuOpen]);

    const handleNavItemClick = (i) => {
    
        const targetSectionId = `section-${i}`;
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        setSelectedTab(i);
    }

    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderTitle}>
                Filip's Portfolio
            </div>
            {/* Regular navigation for larger screens */}
            <div className={styles.NavBarContainer}>
                {
                    navOptions.map((opt, i) => (
                        <div 
                            key={i} 
                            className={`${styles.NavBarContainerItem} ${selectedTab === i && styles.active}`}
                            onClick={() => handleNavItemClick(i)}
                        >
                            {opt}
                        </div>
                    ))
                }
            </div>
            {/* Mobile menu for smaller screens */}
            <div
              className={`${styles.MobileMenuIcon} ${mobileMenuOpen && styles.active}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={styles.MenuIconBar}></div>
              <div className={styles.MenuIconBar}></div>
              <div className={styles.MenuIconBar}></div>
            </div>
            {   mobileMenuOpen &&
                <div className={`${styles.MobileMenu} ${mobileMenuOpen && styles.open}`}>
                {
                    navOptions.map((opt, i) => (
                    <div 
                        key={i}
                        className={`${styles.MobileMenuItem}  ${selectedTab === i && styles.active}`}
                        onClick={() => { 
                        handleNavItemClick(i); 
                        setMobileMenuOpen(false);
                        }}
                    >
                        {opt}
                    </div>
                    ))
                }
                </div>
            }
        </div>
    )
}
