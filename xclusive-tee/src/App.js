import Header from './components/Header';
import HotBrands from './components/HotBrands';
import MenWomen from './components/MenWomen';
import TodayRank from './components/TodayRank';

function App() {
  return (
    <>
      <Header />
      <div class="container mt-5">
        <HotBrands />
        <MenWomen />
        <TodayRank />
      </div>
    </>
  );
}

export default App;

