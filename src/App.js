import "./App.css";
// import NewPassword from "./components/NewPassword";
import { createContext } from "react";
import { useState } from "react";
import Homepage from "./components/Homepage";
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
      {/* {/* <NewPassword /> */}

      <homepageContext.Provider value={contextValues}>
        <Homepage />
      </homepageContext.Provider>
    </div>
  );
}

export default App;
