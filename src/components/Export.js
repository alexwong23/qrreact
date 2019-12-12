import React from "react";
import { Button } from "antd";

const ExportData = ({ hashes, filename }) => {

  const data = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(hashes)
  )}`;

  return (
    <div>
      <Button
        type="secondary"
        href={data}
        download={filename}>
        Download JSON
      </Button>
    </div>
  );
};

export default ExportData;
