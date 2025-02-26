import Sidebar from "./components/Sidebar"; // Correct path inside the src folder
import Navbar from "./components/Navbar"; // Correct path inside the src folder
import Dashboard from "./components/Dashboard"; // Correct path inside the src folder

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
