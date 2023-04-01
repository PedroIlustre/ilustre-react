import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEvjEtvnbiiPw/profile-displayphoto-shrink_800_800/0/1661982949041?e=1684972800&v=beta&t=OH-FEOgDMjETCH2H-LVawAgE4omfajghgcLFFLqnqfY" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Ilustre</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title="11 de maio ás 11:03" dateTime="2022-01-01 01:01:01">Publicado há 1h </time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu profile. É um projeto que diz no NLW return, evento da rocketseat.</p>
                <p><a href="">jane.design/something</a></p>
                <p> 
                    <a href="">#nlw</a> {' '}
                    <a href="">#novprojeto</a> {' '}
                    <a href="">#rocketseat</a> {' '}
                     </p>
            </div>
        </article>
    );
}