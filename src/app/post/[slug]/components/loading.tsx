import styles from './loading.module.scss'

export function LoadingPost(){
    return(
        <div className={styles.loading}>
            <h1>Carregando Página...</h1>
        </div>
    )
}