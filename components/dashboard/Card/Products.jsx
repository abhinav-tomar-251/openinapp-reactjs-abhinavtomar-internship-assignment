"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { faker } from "@faker-js/faker";

const Products = () => {
  const [data, setData] = useState([]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        const value = faker.helpers.rangeToNumber({ min: 0, max: 100 });
        newData.push({ name, value });
      }
      setData(newData);
    };

    generateData();
  }, []);

  return (
    <div className="bg-white border-[3px]  w-full p-5 rounded-[20px] shadow-lg border-[#E0E0E0]">
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <div className="p-3 pl-1">
        <h1 className="font-montserrat -mb-3 font-bold text-xl">
          Top Products
        </h1>
      </div>
      <div className="flex items-center justify-between m-auto w-full max-sm:flex-col">
        <div className="h-[150px] w-60">
          <ResponsiveContainer width="90%" className="m-auto">
            <PieChart className="-mb-10">
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={55}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              {/* <Legend verticalAlign="middle" align="right" layout="vertical" /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center w-full">
              <div className="flex flex-col py-2">
                <div className="flex items-center justify-start">
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <h3 className="font-montserrat font-bold">{entry.name}</h3>
                </div>
                <p className="pl-5">{entry.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;