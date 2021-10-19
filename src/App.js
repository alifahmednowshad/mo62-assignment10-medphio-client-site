// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
