import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import HomePage from "../../components/HomePage";
import "../../global.css";

const Index = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default Index;
