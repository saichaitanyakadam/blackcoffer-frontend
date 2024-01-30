import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BsBrowserChrome } from "react-icons/bs";

const TableView = () => {
  const { tableData } = useContext(AppContext);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setOffset(0);
  }, [tableData]);

  const handlePrev = () => {
    setOffset((prev) => (prev <= 0 ? prev : prev - 10));
  };
  const handleNext = () => {
    setOffset((prev) =>
      prev / 10 < Math.floor(tableData.length / 10) ? prev + 10 : prev
    );
  };
  return (
    <div className="w-full flex gap-2 flex-col my-3 overflow-x-auto">
      <table className="w-full">
        <thead className="">
          <tr className="border border-gray-300 h-[30px]">
            <th className="w-[5%]">Visit</th>
            <th className="w-[25%]">Source</th>
            <th className="w-[40%]">Title</th>
            <th className="w-[15%]">Region</th>
            <th className="w-[5%]">Likelihood</th>
            <th className="w-[10%]">Country</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {tableData.slice(offset, offset + 10).map((item) => (
            <tr key={item._id} className="border border-gray-300 h-[30px]">
              <td className="pl-2">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <BsBrowserChrome />
                </a>
              </td>
              <td>{item.source}</td>
              <td className="max-w-full overflow-hidden line-clamp-1">
                {item.title}
              </td>
              <td>{item.region}</td>
              <td>{item.likelihood}</td>
              <td>{item.country ? item.country : "--"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 text-white items-center self-end">
        <button
          type="button"
          className="bg-gray-500 px-4 py-1 rounded"
          onClick={handlePrev}
        >
          Prev
        </button>
        <p className="text-black">{Math.floor(offset / 10) + 1}</p>
        <button
          type="button"
          className="bg-gray-500 px-4 py-1 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableView;
