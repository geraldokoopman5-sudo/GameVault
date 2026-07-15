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
     <Status owned={props.owned} />
      
    </div>

  
  );
}

//Conditional rendering with if/else statements
// function Status(props) {
//     if (props.owned) {
//         return <p>Ownership: Owned ✅</p>;
//     } else {
//         return <p>Ownership: Not Owned ❌</p>;
//     }
// }

//conditional rendering with terniary operator
// function Status(props) {
//        return (props.owned ? <p>Owned ✅ </p> : <p>Not Owned ❌</p>); 
// }

function Status(props) {

  const OwenedStat = <p>Owned ✅</p>

  const OwenedStat2 = <p>Not Owned ❌</p>  
  
       return (props.owned ?  OwenedStat : OwenedStat2); 
}


export default Gamecard;
