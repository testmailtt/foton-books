import { BooksHome } from './components/BooksHome';
import { Search } from './components/Search';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Search />
      <BooksHome />
      <GlobalStyle />
    </>
  );
}

export default App;
