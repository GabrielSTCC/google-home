import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.brasil}>
                Brasil
            </div>
            <div className={styles.footerS}>
                <div className={styles.parteUm}>
                    <a className={styles.inf}>Sobre</a>
                    <a className={styles.inf}>Publicidade</a>
                    <a className={styles.inf}>Negócios</a>
                    <a className={styles.inf}>Como funciona a Pesquisa</a>
                </div>
                <div className={styles.parteDois}>
                    <a className={styles.inf}>Privacidade</a>
                    <a className={styles.inf}>Termos</a>
                    <a className={styles.inf}>Configurações</a>
                </div>
            </div>
        </div>
    )

}

export default Footer