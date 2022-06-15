import Input from "./UI/Input";
import "./App.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Inputs</h1>
        <div className="input-box">
          <div>
            {'<Input />'}<br></br>
            <br></br>
            <Input></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input error />'}<br></br>
            <br></br>
            <Input error = 'error'></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input disabled />'}<br></br>
            <br></br>
            <Input disabled></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input helperText = "Some interesting text" />'}<br></br>
            <br></br>
            <Input helperText></Input>
          </div>
          <div>
          {'<Input helperText = "Some interesting text" error />'}<br></br>
            <br></br>
            <Input error= 'error' helperText></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input startIcon />'}<br></br>
            <br></br>
            <label>
            
            <Input startIcon = "phone"></Input>
            </label>
          </div>
          <div>
          {'<Input endIcon />'}<br></br>
            <br></br>
            <Input endIcon = "lock"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input value = "text" />'}<br></br>
            <br></br>
            <Input value = "text"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input size = "sm" />'}<br></br>
            <br></br>
            <Input size = "sm"></Input>
          </div>
          <div>
          {'<Input size = "md" />'}<br></br>
            <br></br>
            <Input size = "md"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input fullWidth />'}<br></br>
            <br></br>
            <Input fullWidth value = "text"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
          {'<Input multiline row= "4" />'}<br></br>
            <br></br>
            <Input getrow></Input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
