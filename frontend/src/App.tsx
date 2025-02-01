import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import MainRouter from "./router/MainRouter";
import store from "./redux/store";

function App() {
  return (
    <>
      <ErrorBoundary error="An error occurred" hasError={false}>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
