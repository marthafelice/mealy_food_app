import "./App.css";
import { useState } from "react";
import { createContext } from "react";
// import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage.js";

export const homepageContext = createContext();

function App() {
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [displayPasswordModal, setDisplayPasswordModal] = useState(false);

  const contextValues = {
    displayProfile,
    setDisplayProfile,
    displayEditModal,
    setDisplayEditModal,
    displayPasswordModal,
    setDisplayPasswordModal,
  };
  return (
    <div className="app">
      {/* <NewPassword/> */}
      <homepageContext.Provider value={contextValues}>
        <Homepage />
      </homepageContext.Provider>
    </div>
  );
}

export default App;
