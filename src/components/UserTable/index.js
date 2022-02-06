import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function DataTable({users}) {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'username', headerName: 'Username', width: 200},
    {
      field: 'address.city',
      headerName: 'City',
      width: 200,
      valueGetter: (params) => {
        let result = [];
        if (params.row.address) {
          if (params.row.address.city) {
            result.push(params.row.address.city);
          }
        return result
      }
    }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300
    },
    {
      description: 'Edit modal should pop up',
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          return alert('Open edit modal');
        };
        return <Button color="warning" variant="contained" onClick={onClick}>Edit</Button>;
      }
    },
    {
      description: 'delete modal should pop up',
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
  
          return alert('Open delete modal');
        };
  
        return <Button color="primary" variant="contained" onClick={onClick}>Delete</Button>;
      }
    },
  ];

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
      />
    </div>
  );
}
