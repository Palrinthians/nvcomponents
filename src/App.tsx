import { Button } from "./components/button/button.component";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Button label="Sign Up Button With Big Text" variant='primary' shadow hover />
        <Button label="Sign Up" variant='secondary' shadow hover />
      </div>
    </>
  );
}

export default App;
