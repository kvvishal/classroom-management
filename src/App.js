import bgImage from './assets/bg.jpg';
import './App.css';

function App() {
  return (
    <div className="relative h-screen text-center bg-cover bg-center" style={{ backgroundImage: "url('./assets/bg.jpg')" }}>
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <header className="relative flex flex-col items-center justify-center h-screen text-white text-lg">
        
      </header>
    </div>
  );
}

export default App;
