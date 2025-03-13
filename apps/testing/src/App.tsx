import TemplatePDF from "../../../packages/feature/src/pdf/util/TemplatePDF";
import "@amodeo/util/css/testing";

function App() {
  return (
    <div
      // className="full centered"
      style={{ backgroundColor: "lightgreen", height: "95vh", width: "95%" }}
    >
      <TemplatePDF.Render />
    </div>
  );
}

export default App;
