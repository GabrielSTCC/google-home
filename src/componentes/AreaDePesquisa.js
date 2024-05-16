import styles from './AreaDePesquisa.module.css'

const iconPesq = 'https://s3-alpha-sig.figma.com/img/b075/3bba/20304cb28cb46a4108559d04644ced95?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i9BuaGJ1-Svgw9kqwjgX6JeFab-psLztJSzkG8V1qQCZtZLFLVW~x1JzTm~WICcdmKvYh-k9uwNmVVaAaNqnlM3sslbC7210yWuvYkmr5sm8DMaIpXDL8K-~YDzVPu1RsKokU7I6P7~ICPwMBKkB0c8K1JI3mIorQcU0J8UbI~rFz5EFmBXOGQeBPKrtXwqVtTr08yko2dpUoBIAhL4SWXKO1kgxDgstMFFhPDfduOsV7okag~sK1EQLmzNkHIbxIVHODWxJf556MJECwvgbm3IH1Q4N3~pFxfp~x7U30r50VXW79ieMUTYCs666KJLlrXaY6K5Q1nt3JhVvp6YkIQ__'
const iconTecla = 'https://s3-alpha-sig.figma.com/img/f065/6620/b0d8dccbc7872f4bc363dbf2148125ad?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOQhklFeiujz2XsIUM6Gps8ejfIBGaeyZzvBVuSUH81ATaaNiSfMZkKjFbR35ceheaGhZ2f0BNHAo~RXTrJX~KpPGYrJ88S~qLkWZBrr4UMFQoGQlbx~snpd90zwyeunKeUW2yWt~VkpWVLAqJCMzDgU3vXNsfeDSuNuPSMXQP2hDFBcpJvC3UzX6Ba-5QsGTd0hMGMQoOlkTtfClbllFmNo6tyezMEqXDFq-8mg8P~NKxY7zOeXe1e0wAw9iOdhyTP6Mq4SBUdDh1oahpdhF8zN8vWPfe47bNII6s8tK1ryRCTe-pilbB8rcyHDpyoM7Rd8GlezP-g4U0jpTUCJnw__'
const iconMic = 'https://s3-alpha-sig.figma.com/img/9b37/e95b/4206282946d00258ea7c8c7f76e7cff0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLwx3m48lJkKdbiLwWIBekW0estut1gRmiH6E7hjjKdV5cmylhP4Tw54JCxcnhR0ve75u2B-1Nf5PCaOEE9dZr2NinLBSEhO6JdLyuJ~ZbKKJs1DQTZir9yD3oq6kGtoStkyHV8gVELWDHp-DUwJYUkH~7~RN1cIpBgjm9-6ZKNxg7cURnGmzZA20Y-chU6kE9u8wYoMv0RzPT8tz9YSKEbOBu5OnZlUu5GDRVaPWCdO2Hex4T3zcyk3N~2-1p~cL7jhCiKIC3LfrRKJPsn55ySiWkhq3rsYrCb0DEQApELluE8Am0A46gXnZ8h11u8eVQZdw7uI8Mx0EhFmufRF7A__'
const iconCheck = 'https://s3-alpha-sig.figma.com/img/e8ae/d048/b11f8a7b9f0a6af0c0c9f41f9adadaf5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nK-r8bJ24CMR9VyN5BjorceMr-r4UOJq6KY38c3qbnNyPOJ19233yeyv0bXqPS0iJfHhiSVVUcw~pWR4jjr1PuneVWFmlsvAwRAoBtB0ID3IcfDmbWRFO-fmu5B4APibNb2mLDleWsVLDgDVKIMimaKQywfZOmUy-k7VFhXuSAu-niM2751g2cnf3DUth~Eo73rqua1cwGg66-71RpcMsBd7NXTguACu39OR8F~GH2OLzbVYBi~-LqUoAHu3RgdHm7v8DdDbprQIdefFwB7GIMEuaHZxieILN46ADYyEOW1PwJ1BSQL4-JFYVsv6CmzI8r7uFnXtzWfaSQxISsWAWA__'

function AreaDePesquisa() {
    return (
        <div>
            <form action='/search'
                autocomplete='off'
                method='GET'
                role='search' >
                <div>
                    <div className={styles.interacao}>
                        <div className={styles.barraDePesquisa}>
                            <div className={styles.iconPesquisa}>
                                <img src={iconPesq} alt='ERRO'></img>
                            </div>
                            <div className={styles.pesquisa}>
                                <textarea title="Pesquisar"
                                    aria-label="Pesquisar"
                                    aria-autocomplete="both"
                                    aria-expanded="false"
                                    aria-haspopup="false"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    autocorrect="off"
                                    maxlength="2048"
                                    role="combobox"
                                    rows="1"
                                    spellcheck="false">
                                </textarea>
                            </div>
                            <div className={styles.opcoesDePesq}>
                                <div className={styles.opcaoDePesq}>
                                    <img src={iconTecla} alt='ERRO'></img>
                                </div>
                                <div className={styles.opcaoDePesq}>
                                    <img src={iconMic} alt='ERRO'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.interativos}>
                        <center className={styles.botoesInt}>
                            <input className={`${styles.pesquisaGoogle} ${styles.botao}`}
                                value="Pesquisa Google"
                                aria-label="Pesquisa Google"
                                name="btnK"
                                role="button"
                                tabindex="0"
                                type="submit"
                            />
                            <input className={`${styles.sorte} ${styles.botao}`}
                                value="Estou com sorte"
                                aria-label="Estou com sorte"
                                name="btnI"
                                type="submit"
                            />
                        </center>
                        <div className={styles.check}>
                            <div className={styles.areaCheck}>
                                <img className={styles.iconCheck} src={iconCheck} alt='ERRO' />
                                <a className={styles.textCheck}>Faça o Check-up de privacidade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AreaDePesquisa