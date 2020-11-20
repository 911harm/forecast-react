import Wrapper from './components/Wrapper'
import Hero from './components/Hero'
import Days from './components/Days'
import Places from './components/Places'
import Location from './components/Location'

import './access/css/main.css'
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hero></Hero>
        <div className="conatiner-bot">
        <Days></Days>
        <Places></Places>
        <Location></Location>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
