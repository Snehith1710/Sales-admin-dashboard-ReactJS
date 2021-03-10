import "./App.css";
import Header from "./components/Header";
import Revenue from "./components/Revenue";
import Profitloss from "./components/ProfitLoss";
import Expenses from "./components/Expenses";
import { Switch, Route } from "react-router-dom";
import Invoice from "./components/Invoice";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Invoice} />
        <Route exact path="/Profitandloss" component={Profitloss} />
        <Route exact path="/Revenue" component={Revenue} />
        <Route exact path="/Expenses" component={Expenses} />
      </Switch>
    </>
  );
}

export default App;
