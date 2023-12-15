import { Button } from "./components/button/button.component";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div>
        <Button label="Sign Up Button With Big Text" variant='primary' hasOutline hasShadow />
        <Button label="Sign Up" variant='secondary' hasShadow hasOutline />
      </div>
    </>
  );
}

export default App;
