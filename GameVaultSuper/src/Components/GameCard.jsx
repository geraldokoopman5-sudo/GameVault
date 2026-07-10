import styles from "./FeaturedGame.module.css"

function Gamecard(props) {
  return (
    <div className={styles.GameCard}>

      <h3>
        Featured Game
      </h3>

      <p>Title: {props.title}</p>
      <p>Genre: {props.genre}</p>
      <p>Rating: {props.rating}</p>

    </div>
  );
}

export default Gamecard;