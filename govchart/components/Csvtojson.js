import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

function CsvToJsonComponent() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/govt-data');
      const csvData = await response.text();

      const parsedData = Papa.parse(csvData, { header: true });
      setJsonData(parsedData.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV to JSON Conversion</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}

export default CsvToJsonComponent;
