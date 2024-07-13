import { useEffect, useState } from "react";

function Form({ feilds = [], submitFunc }) {
  const fields = [
    { type: "text", key: "type", label: "Type" },
    { type: "number", key: "pricePerNight", label: "Price per Night" },
    { type: "text", key: "status", label: "Status" },
    { type: "text", key: "description", label: "Description" },
  ];

  const [state, setState] = useState({});

  const onChangeInput = (e, key) => {};

  useEffect(() => {
    const object = {};
    feilds.forEach((f) => {});
  }, []);

  return (
    <div>
      {feilds.map((feild) => {
        <input type={feild?.type ? feild.type : "text"} />;
      })}
    </div>
  );
}

export default Form;
