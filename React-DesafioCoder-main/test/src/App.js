import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"; //Me traigo el componente ItemListContainer
import NavBar from "./NavBar"; //Me traigo el componente Navbar

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
