import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebard}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=50" 
            />
            <div className={styles.profile}>
                <strong>Pedro Ilustre</strong>
                <span> Software Developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    );
}