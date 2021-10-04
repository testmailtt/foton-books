import { BooksHome } from './components/BooksHome';
import { CurrentlyReading } from './components/CurrentlyReading';
import { Search } from './components/Search';
import {AllVideo } from './components/AllVideo'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Search />
      <BooksHome />
      <CurrentlyReading />
      <AllVideo/>
      <GlobalStyle />
      
    </>
  );
}

export default App;
