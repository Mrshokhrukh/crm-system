import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./ErrorBoundary";
import MainRouter from "./router/MainRouter";

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
