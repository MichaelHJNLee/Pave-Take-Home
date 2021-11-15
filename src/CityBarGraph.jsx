import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { forEach, map } from "lodash";

const CityBarGraph = (props) => {
  const { data, bonus, id, city, cityField } = props;
  let dict = {};
  forEach(data, (v) => {
    let key =
      cityField === "startDate" ? v[cityField].split("-")[0] : v[cityField];
    if (!dict[key]) {
      dict[key] = [v];
    } else {
      dict[key].push(v);
    }
  });
  let count = 0;
  const sortedData = map(Object.keys(dict), (key) => {
    let obj = {
      [cityField]: key,
      salary: 0,
    };
    forEach(dict[key], (s) => {
      obj.salary += parseInt(s.salary);
      if (bonus) {
        obj.salary += parseInt(s.bonus);
      }
      count++;
    });
    obj.salary = parseFloat((obj.salary / count).toFixed(2));
    return obj;
  });

  return (
    <div className="Section" id={id}>
      {`# of Employees in ${city}: ${count}`}
      <br />
      {`Average Salary by ${cityField} for ${city}`}
      <br />
      <BarChart width={1000} height={250} data={sortedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={`${cityField}`} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="salary" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CityBarGraph;
