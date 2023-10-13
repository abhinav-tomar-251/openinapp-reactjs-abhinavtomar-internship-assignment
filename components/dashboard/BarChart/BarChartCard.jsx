import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartCard = () => {
  const [genData, setGenData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 4; i++) {
        const name = faker.date.month(); // 'October'
        const uv = faker.finance.amount();
        const pv = faker.finance.amount();
        newData.push({ name, uv, pv });
      }
      setGenData(newData);
    };

    generateData();
  }, []);

  const legendStyle = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center">
        <div className="flex items-center justify-end w-full gap-8">
          {payload.map((entry, index) => (
            <div
              key={`item-${index}`}
              className="flex items-center justify-start gap-5"
            >
              <div
                style={{
                  backgroundColor: entry.color,
                  width: 15,
                  height: 15,
                  marginRight: -10,
                }}
              />
              <span className="font-sans font-semibold text-xl">
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex p-10 max-sm:p-3 justify-center items-center flex-col w-full mt-6 shadow-lg rounded-[20px] border-[3px] bg-white border-[#E0E0E0]">
      <div className="w-full flex items-center justify-start pl-2">
        <h1 className="font-montserrat font-bold text-xl">Activites</h1>
      </div>
      <div className="max-sm:h-[200px]  w-full h-[400px] ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={genData}
            margin={{
              top: 0,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid x={1} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              height={36}
              content={legendStyle}
            />
            <Bar dataKey="pv" fill="#98D89E" radius={5} />
            <Bar dataKey="uv" fill="#EE8484" radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartCard;