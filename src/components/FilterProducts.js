import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { getProductsByCategory } from "../redux/slice/getAllProductsSlice";
const { Option } = Select;

const FilterProducts = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.categories);
  const [selectedValue, setSelectedValue] = useState("ALL");
  const HandleChangeCategories = (value) => {
    console.log("selectedValue", value);
    setSelectedValue(value);
    dispatch(getProductsByCategory(value));
  };
  return (
    <div className="float-right filter-product">
      <>
        <span className="filter-product-label">Filter Products</span>

        <Select
          className="select-filter-product"
          style={{ width: "200px" }}
          disabled={status}
          showSearch
          value={selectedValue}
          onChange={HandleChangeCategories}
          placeholder="Select a person"
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
    </div>
  );
};

export default FilterProducts;
