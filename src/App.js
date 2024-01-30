import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tab1, Tab2, Tab3, Tab4 } from "./pages";
import Header from "./components/Header";

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <AppContext.Provider value={{ tableData, setTableData }}>
      <BrowserRouter>
        <main className="h-screen w-screen overflow-x-hidden relative">
          <header className="flex lg:hidden fixed z-10 w-full bg-white">
            <Header />
          </header>
          <aside className="w-[20vw] fixed h-screen hidden lg:flex border-r-2">
            <Sidebar />
          </aside>
          <section className="flex flex-col flex-1 min:h-[100vh] overflow-y-auto lg:ml-[20vw] p-5 mt-[5vh]">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/tab1" exact element={<Tab1 />} />
              <Route path="/tab2" exact element={<Tab2 />} />
              <Route path="/tab3" exact element={<Tab3 />} />
              <Route path="/tab4" exact element={<Tab4 />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
