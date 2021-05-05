import React from "react";
import TitleDiv from "./components/Title";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper"
import EmpInfo from "./components/EmpInfo"



function App() {
  return (
    <div className="container">
      <TitleDiv/>
      <Navbar />
      <Wrapper>
        <EmpInfo/>
      </Wrapper>
    </div>

  );
}

export default App;
