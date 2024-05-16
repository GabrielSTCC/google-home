import styles from './Cabecalho.module.css'

const menu = 'https://s3-alpha-sig.figma.com/img/711a/9847/e5a9bc8e3d093ff1fa6d918e28fcd873?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=px4T5IuPxNVwz0seZc6rI1EHdNp636cD5P~coINIy6yD8B0ACPhuBC1lcvHZtIhNHLS3z0Zdvb4GYspKAKC1oRu2epmVKoL8169e4rYX0M5MUc37O5IWylOAVle9UXeN3cIKtBffDC1v3MxT9-EFGr2WH-epllAcSJuZrngXjqEWmEa9cIOu3BsnuD2uIXEHrkRgoVe61XNGfRnJ9hdMKnmo41-C1V-JwUhRehVwIp1Pt7BLQcgBcDql-yA1SSsqn8ZhnuwEbbjlsn6aehtsZvIk9Z0zh9opBI8gaXW3eRKkw3ly1f53KG4uKIOVtKrCo~38Vy0uhk4ZSp7lJWETzw__'
const user = 'https://s3-alpha-sig.figma.com/img/58e8/3641/5dde1b2ae5802a6c97cbde3ffa554803?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RVAYMZSoQvHikLVdw0ibKcPu2oy7ZaxgE6nzuPK5p8r7gweCC7FcJfOTaeCdP5N37gGP~8i0u38v4YeWwh8CyowbLlUTOAYrmZgjwa1qJG3LJbmxq708MVWxW8Wi4-TgLDAHmupax4rVWpYBWO2W8BSoLV7PA1T9lxms~ZS40Kdt-yOHGnbAeoHMDvc0e9y1CGQrROjBA2i10H09MKY~HhMKQunJjjyd8xBQB8MO4oO4mWBh2-L3KkGFfsFklACdxWdkzPkZsvVpBLhURAjMz8cvC-r1i8LxSkaXperna-BBUMHLJ3TouHBxjapKg~~NG7oO81GXWaumWdbKO~c7Ow__'

function Cabecalho(){
    return(
        <div className={styles.cabecalho}>
            <div className={styles.textLine}>
                <div className={styles.text}>
                    <a>Gmail</a>
                </div>
                <div className={styles.text}>
                    <a>Imagens</a>
                </div>
                
                
            </div>
            <div className={styles.icons}>
                <div className={`${styles.icon} ${styles.menu}`}>
                    <a><img className={styles.imagem} src= {menu} alt= 'ERRO' /></a>
                </div>
                <div className={styles.icon}>
                    <a><img className={styles.imagem} src= {user} alt = 'ERRO' /></a>
                </div>
                
            </div>
            

        </div>
    )
}

export default Cabecalho