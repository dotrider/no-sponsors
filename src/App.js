import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import router from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      {router}
    </div>
  );
}

export default App;
