import { BooksHome } from './components/BooksHome';
import { CurrentlyReading } from './components/CurrentlyReading';
import { Search } from './components/Search';
import {AllVideo } from './components/AllVideo'
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global'


function App() {
  return (
    <>
      <Search />
      <BooksHome />
      <CurrentlyReading />
      <AllVideo/>
      <Footer />
      <GlobalStyle />
      
    </>
  );
}

export default App;
