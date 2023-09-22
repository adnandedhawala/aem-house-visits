/* eslint-disable security/detect-object-injection */
/* eslint-disable unicorn/prevent-abbreviations */
import React, { useCallback, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const HousesGrid = ({ data }) => {
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "600px" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const columnDefs = [
    { field: "itsId", headerName: "ITS", flex: 2, minWidth: 150 },
    {
      field: "tanzeem_file_no",
      headerName: "File",
      minWidth: 100,
      flex: 1
    },
    { field: "hof_id", headerName: "HOF ITS", flex: 2, minWidth: 150 },
    { field: "full_name", headerName: "Name", flex: 3, minWidth: 300 },
    { field: "address", headerName: "Address", flex: 3, minWidth: 300 },
    { field: "sector", headerName: "Sector", flex: 2, minWidth: 150 },
    { field: "sub_sector", headerName: "Sub Sector", flex: 2, minWidth: 200 },
    { field: "status", headerName: "Status", flex: 3, minWidth: 200 },
    { field: "comments", headerName: "Comments", flex: 4, minWidth: 400 }
  ];
  const defaultColDef = useMemo(() => {
    return {
      editable: false,
      minWidth: 100,
      flex: 1,
      resizable: false,
      filter: "agTextColumnFilter"
    };
  }, []);

  const processCellFromClipboard = useCallback(params => {
    return params.value;
  }, []);

  const processCellForClipboard = useCallback(params => {
    return params.value;
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          copyHeadersToClipboard={false}
          undoRedoCellEditing={true}
          undoRedoCellEditingLimit={20}
          processCellFromClipboard={processCellFromClipboard}
          processCellForClipboard={processCellForClipboard}
          rowSelection={"multiple"}
          suppressScrollOnNewData={true}
        ></AgGridReact>
      </div>
    </div>
  );
};
