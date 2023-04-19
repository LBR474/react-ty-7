//react imports
import React, { useState } from "react";

//component imports
import CanvasPage from "./components/CanvasPage";
import Heading from "./components/Heading";
import Tailing from "./components/Tailing";

//router imports
import { Route, Routes, Navigate } from "react-router-dom";

//style imports
import "./index.scss";

interface Props {
  title: string;
  loggedIn: boolean;
}

function App() {
  const [loggedIn, setloggedIn] = useState(true);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Heading
              title={"Get things moving"}
              fillColor={""}
              loggedIn={false}
            />
          }
        />
        <Route
          path="/canvas"
          element={
            loggedIn ? (
              <CanvasPage title="Canvas component" loggedIn />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/tailing"
          element={<Tailing title={""} fillColor={""} loggedIn={false} />}
        />
      </Routes>
    </div>
  );
}

export default App;
