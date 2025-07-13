import "./App.css";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MainLayout>
      <div className="">
        <HomePage />
      </div>
    </MainLayout>
  );
}

export default App;
