import React from "react";
import CustomSelect from "./components/CustomSelect";
import { options } from "./options";

const App = () => {
  return (
    <div className="App">
      <CustomSelect
        className="input-box"
        options={options}
        isMultiSelect
        isSearchable
        showImages
        placeholder="Select..."
      />
    </div>
  );
};

export default App;
