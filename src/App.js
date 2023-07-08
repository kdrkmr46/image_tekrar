import Picture from "./components/Picture";
import data from "./helpers/data";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <h1>albüms</h1>
      {data.map((item) => {
        return <Picture img={item.src.large} photoname={item.photographer} />;
      })}
    </div>
  );
}
export default App;
