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
            Inputs<br></br>
            <br></br>
            <Input error = 'error'></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input disabled></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input helperText></Input>
          </div>
          <div>
            Inputs<br></br>
            <br></br>
            <Input error= 'error' helperText></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <label>
            
            <Input startIcon = "phone"></Input>
            </label>
          </div>
          <div>
            Inputs<br></br>
            <br></br>
            <Input endIcon = "lock"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input value = "text"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input size = "sm"></Input>
          </div>
          <div>
            Inputs<br></br>
            <br></br>
            <Input size = "md"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input fullWidth value = "text"></Input>
          </div>
        </div>
        <div className="input-box">
          <div>
            Inputs<br></br>
            <br></br>
            <Input getrow></Input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
