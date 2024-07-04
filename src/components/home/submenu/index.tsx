"use client"

import { useState, useEffect } from 'react'
import { X, Menu} from 'lucide-react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { MenuProps } from '@/utils/menu.type'


interface SubMenuProps {
    menu: MenuProps
}

export default function SubMenu({menu}: SubMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleRecize = () => {
            if(window.innerWidth > 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleRecize)

        return () => {
            window.removeEventListener("resize", handleRecize)
        }

    }, [])

    function toggleMenu() {
        setIsOpen(!isOpen)
    }


    return (
        <section className={styles.submenu}>
            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34}color='#121212'/>
            </div>

            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                {isOpen && (
                    <button className={styles.closeMenu} onClick={toggleMenu}>
                        <X size={34} color='#121212'/>
                    </button>
                )}

              {menu.objects.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/post/${item.slug}`}>{item.title}</Link>
                 </li>
              ))}


            </ul>
        </section>
    )
}