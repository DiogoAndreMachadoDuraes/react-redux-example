import { Provider } from "react-redux";
import { Example } from "./screens";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}

export default App;
