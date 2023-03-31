import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'cover', headerName: 'Cover', width: 150 },
  { field: 'title', headerName: 'Title' },
  { field: 'author', headerName: 'Author', width: 150 },
  {
    field: 'date',
    headerName: 'Date Added',
    width: 150,
  },
];

const rows = [
  { id: 1, cover: 'Snow', title: 'Snow white and the minions', author: 'Robert C Martin', date: '24/12/2004' },
  { id: 2, cover: 'Diapers', title: 'Snow white and the minions', author: 'Robert C Martin', date: '24/12/2004' },
  { id: 3, cover: 'Medicine', title: 'Snow white and the minions', author: 'Robert C Martin', date: '24/12/2004' },
  { id: 4, cover: 'Pretty', title: 'Snow white and the minions', author: 'Robert C Martin', date: '24/12/2004' },
];

export default function TableBooks() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
}
