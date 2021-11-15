import "./App.css";
import Navbar from "./Navbar";
import BarGraph from "./BarGraph";
import CityBarGraph from "./CityBarGraph";
import gamine from "./gamine.json";
import hookfish from "./hookfish.json";
import { useState } from "react";
import { get } from "lodash";

const App = () => {
  const [company, setCompany] = useState(gamine);
  const [bonus, setBonus] = useState(false);
  const [city, setCity] = useState("Akron");
  const [cityField, setCityField] = useState("country");

  const handleCheckbox = (e) => {
    let selection = e.target.value === "gamine" ? gamine : hookfish;
    let other = e.target.value === "gamine" ? hookfish : gamine;
    if (company === e.target.value) {
      setCompany(other);
    } else {
      setCompany(selection);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <input
        onChange={(e) => handleCheckbox(e)}
        checked={company === gamine}
        type="checkbox"
        id="gamine"
        name="gamine"
        value="gamine"
      ></input>
      <label> Gamine</label>
      <input
        onChange={(e) => handleCheckbox(e)}
        checked={company === hookfish}
        type="checkbox"
        id="hookfish"
        name="hookfish"
        value="hookfish"
      ></input>
      <label> Hookfish</label>
      <br />
      <input
        onChange={() => setBonus(!bonus)}
        checked={bonus}
        type="checkbox"
        id="bonus"
        name="bonus"
        value="bonus"
      ></input>
      <label> Include Bonus</label>
      <BarGraph id="1" title={"City"} data={company.city} bonus={bonus} />
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        {Object.keys(company.city)
          .sort()
          .map((city) => (
            <option value={city}>{city}</option>
          ))}
      </select>
      <label> City</label>
      <select onChange={(e) => setCityField(e.target.value)}>
        {Object.keys(get(company, `city[${city}][0]`, {}))
          .sort()
          .map((key) => {
            if (
              key === "bonus" ||
              key === "email" ||
              key === "firstName" ||
              key === "lastName" ||
              key === "salary" ||
              key === "city"
            )
              return;
            return <option value={key}>{key}</option>;
          })}
      </select>
      <label> Field</label>
      <CityBarGraph
        id="2"
        data={company.city[city]}
        bonus={bonus}
        city={city}
        cityField={cityField}
      />
      <BarGraph
        id="3"
        title={"Department"}
        data={company.department}
        bonus={bonus}
      />
      <BarGraph id="4" title={"Gender"} data={company.gender} bonus={bonus} />
      <BarGraph
        id="5"
        title={"Start Date"}
        data={company.startDate}
        bonus={bonus}
      />
    </div>
  );
};

export default App;
