import { ActiveLink } from '../ActiveLink';
import { SigInButton } from '../SigInButton';
import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink href="/" activeClassname={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink  href="/posts" activeClassname={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SigInButton/>
            </div>
        </header>
    )
}