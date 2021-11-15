import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { forEach, map } from "lodash";

const ScatterPlot = (props) => {
  const sorted = Object.keys(props.data).sort();
  // const data = map(sorted, v => {
  //   let count = 0;
  //   let obj = {
  //     name: v,
  //     salary: 0,
  //   };
  //   forEach(props.data[v], s => {obj.salary += parseInt(s.salary); count++});
  //   obj.salary = parseFloat((obj.salary / count).toFixed(2));
  //   return obj;
  // });
  console.log(props.data);
  return (
    <div className="Section" id={props.id}>
      {`Average Salary by ${props.title}`}
      <br />
      <ScatterChart
        width={1500}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="city" />
        <YAxis dataKey="y" name="salary" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="salary" data={props.data} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
};

export default ScatterPlot;
