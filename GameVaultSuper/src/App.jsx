import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Gamecard from "./Components/GameCard.jsx";


function App() {
  return (
    <>
      <Header/>

      <Hero/>

      <Gamecard 
        title="Star Wars Jedi Fallen Order"
        genre="Action Adventure"
        rating={4}
        owned={false}
      
      />

      <Gamecard 
        title="Elden Ring"
        genre="RPG Soulslike"
        rating ={5}
        owned={true}
      />

      <Gamecard 
        title="Minecraft"
        genre="Sandbox"
        rating={3}
        owned={false}   

      />

    

      <Footer/>
    </>
  );
}

export default App;