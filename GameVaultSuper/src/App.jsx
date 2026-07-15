import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Gamecard from "./Components/GameCard.jsx";


function App() {

       const gameList = [
  {
    title: "Elden Ring",
    genre: "Souls Like",
    rating: 5,
    owned: true,
    status: false
  },

   {
      title: "Minecraft",
      genre: "Sandbox",
      rating: 3,
      owned: false,
      status: true
    }
];
  return (
    <>
      <Header/>
      <Hero/>
      {gameList.map((game) => (
        <Gamecard
          key={game.title}
          title={game.title}
          genre={game.genre}
          rating={game.rating}
          owned={game.owned}
          status={game.status}
        />
      ))}

      <Footer/>
    </>
  );
}

export default App;