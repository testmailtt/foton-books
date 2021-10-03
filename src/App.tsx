import { BooksHome } from './components/BooksHome';
import { CurrentlyReading } from './components/CurrentlyReading';
import { Search } from './components/Search';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Search />
      <BooksHome />
      <GlobalStyle />
      <CurrentlyReading />
    </>
  );
}

export default App;
