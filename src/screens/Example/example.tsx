import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import { changeValue, deleteValue } from "../../store";

export const Example: React.FC = () => {
  // Dispatch function from the Redux store
  const dispatch = useDispatch();

  // Invoke StoreValue and setValue from ExampleStore
  const storeValue = useSelector(
    (storeState: StoreState) => storeState.exampleStore.value
  );

  // Create State named localValue
  const [localValue, setLocalValue] = useState(storeValue);

  // Changed State localValue to InputValue
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setLocalValue(event.target.value);

  // Changed Value in Store
  const saveChanges = (): void => {
    dispatch(changeValue(localValue));
  };
  // Delete Value in Store
  const deleteStoreValue = (): void => {
    dispatch(deleteValue());
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>Local Value: </p>
        <div style={{ width: "5px" }} />
        <p>{localValue}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>Value in redux-store: </p>
        <div style={{ width: "5px" }} />
        <p>{storeValue}</p>
      </div>
      <input onChange={onChangeValue} value={localValue} />
      <div style={{ height: "10px" }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={saveChanges}>Save Store Value</button>
        <div style={{ width: "5px" }} />
        <button onClick={deleteStoreValue}>Delete Store Value</button>
      </div>
    </div>
  );
};
