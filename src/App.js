import { useState } from "react";
import { Board } from "./components/Board";
import Grouper from "./components/Grouper";


function App() {

    const options_ = ["status", "userId", "priority"];
    const [option, setOption] = useState("status");


    return (
        <div className="App">
            < Grouper options_={options_} setOption={setOption}/>
            < Board option={option}/>
        </div>
    );
}

export default App;
