import { QueryClient, QueryClientProvider } from "react-query";
import List from "./components/List";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <List />
    </QueryClientProvider>
  )
};

export default App;