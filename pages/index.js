import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaceRequest, getPlaceDetailsRequest } from "~/redux/placeDux";
import { AutoComplete } from "antd";
import List from "~/components/common/List";

function Index() {
  const dispatch = useDispatch();

  const { predictions, result } = useSelector(state => state.place);
  const [options, setOptions] = useState([]);

  const renderItems = () =>
    result.map(({ formatted_address, place_id }) => (
      <li key={place_id}>{formatted_address}</li>
    ));

  const handleSelect = (_, { place_id }) => {
    dispatch({
      type: getPlaceDetailsRequest.type,
      placeId: place_id
    });
  };

  const handleChange = input =>
    dispatch({
      type: getPlaceRequest.type,
      input
    });

  useEffect(() => {
    setOptions(
      predictions.map(({ description, place_id }) => ({
        value: description,
        place_id
      }))
    );
  }, [predictions]);

  return (
    <div
      style={{
        display: "flex",
        margin: "1rem",
        alignItems: "center",
        flexDirection: "column"
      }}>
      <h1>Google Place Autocomplete</h1>
      <AutoComplete
        options={options}
        style={{
          width: 200,
          margin: "1rem 0"
        }}
        onSelect={handleSelect}
        onChange={handleChange}
        placeholder="Search Address..."
      />
      <List title="Search History">
        <ul>{renderItems()}</ul>
      </List>
    </div>
  );
}

export default Index;
