import Footer from "components/footer/footer";
import NavBar from "components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo !</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
