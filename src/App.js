import { Header, Footer, Winners, PopularGames, SlotGames, Bonuses, LiveCasino, Banner } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <PopularGames />
      <Bonuses />
      <LiveCasino />
      <Winners />
      <SlotGames />
      <Footer />
    </div>
  );
}

export default App;
