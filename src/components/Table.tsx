import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

type ClientList = {
    login: {
        uuid: string,
    },
    name: {
        first: string,
        last: string,
    },
    dob: { 
        date: string,
    }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function DataGridDemo() {
    const [clients, setClients] = useState<ClientList[]>([]);

    useEffect(() => {
      fetch("https://randomuser.me/api/?page=10&results=50")
        .then((response) => response.json())
        .then((data) => {
          setClients(data.results);
        });
    }, []);
  
    const rows = clients.map((client) => ({
      id: client.login.uuid,
      firstName: client.name.first,
      lastName: client.name.last,
      birthday: client.dob.date,
    }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
