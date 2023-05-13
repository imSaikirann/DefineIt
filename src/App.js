import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import './App.css';
import Dic from './components/Dic';



function App() {
  return (
   <ChakraProvider>
    <Dic></Dic>
   </ChakraProvider>
  );
}

export default App;
