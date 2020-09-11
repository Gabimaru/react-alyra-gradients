import React from "react";
import GradientsList from "./components/GradientsList";
import gradients from "./gradients";
import GradientsHeader from "./components/GradientsHeader.js";
//import GradientsSelect from "./components/GradientsSelect.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <header className="App-header">
        <GradientsHeader list={gradients} />
      </header>
      <main>
        <div className="container my-4">
          <h1 className="text-center">React Alyra Gradients</h1>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="select">
              Filtrer par tag
            </label>
            <select id="select" className="form-select"></select>
          </div>
          <GradientsList list={gradients} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
