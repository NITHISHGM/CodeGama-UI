import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const FilterProducts = () => {
  const { data, status } = useSelector((state) => state.categories);
  const [selectedValue, setSelectedValue] = useState("ALL");
  const HandleChangeCategories = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className="float-right">
      {!status ? (
        <>
          Categories
          <Select
            style={{ width: "200px" }}
            showSearch
            onChange={HandleChangeCategories}
            placeholder="Select a person"
            value={selectedValue}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="ALL">ALL</Option>
            {data.map((d) => {
              return <Option value={d}>{d}</Option>;
            })}
          </Select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterProducts;
