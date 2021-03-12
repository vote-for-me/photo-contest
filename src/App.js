import './App.css';
import { useEffect } from "react";
function App() {

  useEffect(() => {
    window.location.href = "https://google.com/contact";
  }, []);
  return (
    <div className="App">
    </div>
  );
  
}

export default App;
