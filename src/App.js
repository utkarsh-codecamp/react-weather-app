import Search from './components/Search';
import WeatherBase from './components/WeatherBase';
import './App.css';

function App() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-md-10">
            <Search />
            <WeatherBase />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
