import React from "react";
import { Container } from "react-bootstrap";
import { Pie, PieChart, Tooltip } from "recharts";

function GraphData() {
  const data = [
    {
      name: "Facebook",
      value: 20000000000,
    },
    {
      name: "Instagram",
      value: 15000000000,
    },
    {
      name: "Twitter",
      value: 10000000000,
    },
    {
      name: "Telegram",
      value: 30000000000,
    },
  ];

  return (
    <Container className="text-center">
      <h1>Social Media User</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </Container>
  );
}
export default GraphData;
