import styles from "./Header.module.css"

function Header(){
    return( 
        <div className={styles.Header}>
            <h1>Game Vault</h1>
                <p>
                    We keep your games locked up like a vault on summ secure shi
                </p>
        </div>
    );
}

export default Header;