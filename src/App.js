import Picture from "./components/Picture";
import data from "./helpers/data";

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        return <Picture img={item.src.large} photoname={item.photographer} />;
      })}
    </div>
  );
}
export default App;
