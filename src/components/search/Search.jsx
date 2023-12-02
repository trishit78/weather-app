import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, options } from "./api";
import "./search.css";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (input) => {
    return fetch(`${url}?minPopulation=100000&namePrefix=${input}`, options)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AsyncPaginate
        className="w-1/2 ml-80  mt-8 "
        placeholder="Enter The City.."
        debounceTimeout={500}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
}

export default Search;
