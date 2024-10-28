import { Header } from "./components";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <br />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
