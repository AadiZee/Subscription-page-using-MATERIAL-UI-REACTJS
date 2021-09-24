import "./App.css";
import GridLayout from "./Components/GridLayout/GridLayout";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <main>
          <GridLayout></GridLayout>
        </main>
      </Container>
    </div>
  );
}

export default App;
