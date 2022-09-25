import React from "react";

type Props = {
  children: React.ReactNode;
  extraColumn?: boolean;
};

const CardContainer: React.FC<Props> = ({ children, extraColumn }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: extraColumn
          ? "auto auto auto auto"
          : "auto auto auto",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
