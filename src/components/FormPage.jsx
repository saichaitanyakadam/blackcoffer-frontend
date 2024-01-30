import { useCallback, useContext, useEffect, useState } from "react";
import { countries, pesltes, sectors } from "../constants";
import { CiSearch } from "react-icons/ci";
import { AppContext } from "../context/AppContext";
import InputField from "./InputField";

const FormPage = () => {
  const [pestle, setPestle] = useState("");
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [likelihood, setLikelihood] = useState(0);
  const { setTableData } = useContext(AppContext);
  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:4500/api/data?search=${search}&country=${country}&likelihood=${likelihood}&sector=${sector}&pestle=${pestle}`
      );
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error(error);
    }
  }, [pestle, search, sector, country, likelihood, setTableData]);
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex justify-between gap-2 flex-wrap bg-slate-300 p-3">
      <InputField className="relative">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          className="w-full h-full pl-8 outline-none"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <CiSearch className="absolute top-3 left-2" size={20} />
      </InputField>
      <InputField>
        <select
          className="h-full w-full pl-2"
          value={pestle}
          name="pestle"
          onChange={(event) => {
            setPestle(event.target.value);
            setLikelihood(0);
          }}
        >
          {pesltes.map((item, index) => (
            <option
              key={index}
              className={`capitalize ${item._id === "" && "hidden"}`}
              value={item._id}
            >
              {item._id === "" ? "Select pestle" : item._id}
            </option>
          ))}
        </select>
      </InputField>
      <InputField>
        <select
          name="sector"
          className="h-full w-full pl-2"
          value={sector}
          onChange={(event) => {
            setSector(event.target.value);
            setLikelihood(0);
          }}
        >
          {sectors.map((item, index) => (
            <option
              key={index}
              value={item._id}
              className={`capitalize ${item._id === "" && "hidden"}`}
            >
              {item._id === "" ? "Select Sector" : item._id}
            </option>
          ))}
        </select>
      </InputField>
      <InputField>
        <select
          name="country"
          className="w-full h-full pl-2"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
            setLikelihood(0);
          }}
        >
          {countries.map((item, index) => (
            <option
              key={index}
              className={`capitalize ${item._id === "" && "hidden"}`}
              value={item._id}
            >
              {item._id === "" ? "Select Country" : item._id}
            </option>
          ))}
        </select>
      </InputField>
      <InputField>
        <select
          name="likelihood"
          className="w-full h-full pl-2"
          value={likelihood}
          onChange={(event) => {
            setLikelihood(event.target.value);
          }}
        >
          <option className="hidden">Select Likelihood</option>
          {Array.from({ length: 4 }).map((item, index) => (
            <option key={index} className={`capitalize`}>
              {index + 1}
            </option>
          ))}
        </select>
      </InputField>
    </div>
  );
};

export default FormPage;
