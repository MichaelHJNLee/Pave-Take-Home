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

const BarGraph = (props) => {
  const { data, title, bonus, id } = props;
  const sorted = Object.keys(data).sort();
  const sortedData = map(sorted, (v) => {
    let count = 0;
    let obj = {
      name: v,
      salary: 0,
    };
    forEach(data[v], (s) => {
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
      {`Average Salary by ${title}`}
      <br />
      <BarChart width={1500} height={250} data={sortedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="salary" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarGraph;
