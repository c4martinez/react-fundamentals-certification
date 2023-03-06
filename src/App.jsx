import { AppRouter } from './AppRouter';
import { PokemonProvider } from './contex/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App
