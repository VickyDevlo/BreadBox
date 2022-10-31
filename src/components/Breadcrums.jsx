import React, { useState } from "react";
import "./Breadcrums.css";

const Breadcrums = () => {
  const JsonData = [
    {
      type: "designer",
      technology: [
        {
          subject: "html",
        },
        {
          subject: "css",
        },
        {
          subject: "bootstrap",
        },
      ],
    },
    {
      type: "developer",
      technology: [
        {
          subject: "javascript",
        },
        {
          subject: "react",
        },
        {
          subject: "typescript",
        },
      ],
    },
    {
      type: "tester",
      technology: [
        {
          subject: "manual",
        },
        {
          subject: "auto",
        },
      ],
    },
  ];

  const [data, setData] = useState(JsonData);
  console.log(data);
  const onclickHandler = (getItem) => {
    setData(
      data.map((item) => ({
        ...item,
        technology: item.technology.filter(
          (subitems) => subitems.subject !== getItem
        ),
      }))
    );
  };
  return (
    <div className="breadBoxWrapper">
      {data.map((item, index) => {
        return (
          <>
            {item.technology.length !== 0 && (
              <div className="breadBox" key={index}>
                <p className="title">{item.type} :</p>
                <ul>
                  {item.technology.map((subitems, i) => {
                    return (
                      <li key={i}>
                        {subitems.subject}
                        <button
                          onClick={() => onclickHandler(subitems.subject)}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrums;
