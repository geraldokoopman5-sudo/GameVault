import styles from "./FeaturedGame.module.css"

function FeaturedGame() {
  return (
    <div className={styles.FeaturedGame}>
      <h3>Featured Game</h3>

      <ul>
        <ul>Title: Star Wars: Jedi Fallen Order</ul>
        <ul>Genre: Action-Adventure, RPG, SoulsLike</ul>
        <ul>Platform: PlayStation 5, Xbox Series X/S, PC</ul>
        <ul>Release year: 2019</ul>
        <ul>
          Description: Play as Cal Kestis, a Padawan hunted by the Empire.
        </ul>
      </ul>

    </div>
  );
}

export default FeaturedGame;