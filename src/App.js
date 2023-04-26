import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import Ticker from './components/Ticker';
import flower from "./assets/images/flower.png"

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <MainBlock/>
      <Ticker/>
      <Footer/>
      <div className='falling'>
        <img src={flower} class="i n1"></img>
        <img src={flower} class="i n2"></img>
        <img src={flower} class="i n3"></img>
        <img src={flower} class="i n4"></img>
        <img src={flower} class="i n5"></img>
        <img src={flower} class="i n6"></img>
      </div>
    </div>
  );
}

export default App;
