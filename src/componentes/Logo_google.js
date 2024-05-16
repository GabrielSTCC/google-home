import styles from './Logo_google.module.css'

function Logo_google(){

    const logo = 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'

    return (
        <div className={styles.logoGo}>
            <img src= {logo} alt= 'ERRO' />
        </div>
    )
}

export default Logo_google