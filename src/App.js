import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <Weather />
        <footer className="linkHub text-center mt-3">
          <a href="https://github.com/Anna-Mamedova/weather-app">My GitHub</a>
        </footer>
      </div>
    </div>
  );
}

