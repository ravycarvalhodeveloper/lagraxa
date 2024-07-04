import styles from './styles.module.scss'
import{ ReactNode } from 'react'


export default function Container({children}:{children: ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}