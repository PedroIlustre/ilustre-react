import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=50" 
            />
            <div className={styles.profile}>
                <img 
                    src="https://media.licdn.com/dms/image/C4D03AQEvjEtvnbiiPw/profile-displayphoto-shrink_800_800/0/1661982949041?e=1684972800&v=beta&t=OH-FEOgDMjETCH2H-LVawAgE4omfajghgcLFFLqnqfY" 
                    className={styles.avatar} 
                />
                <strong>Pedro Ilustre</strong>
                <span> Software Developer</span>
            </div>
            <footer>
                <a href="#"> 
                    <PencilLine size={20} /> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}