import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const headers = ['Frozen yoghurt', 'Ice cream sandwich', 'Eclair','Cupcake','Gingerbread']
const getKeys = (row1) =>{
  return Object.keys(row1);
}
const getRowsData = (rows)=>{
  var keys = getKeys(rows[0]);
  var items = rows;
  return items.map((row, index)=>{
    return <TableRow key={index}><RenderRow key={index} data={row} keys={keys}/></TableRow>
  })
}
const RenderRow = ({data, keys}) =>{
  return keys.map((key, index)=>{
    //return <TableCell key={index} component={()=>data[key]}></TableCell>
  return <TableCell key={index} >{data[key]}</TableCell>
  })
}

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>

          <TableRow>
            {console.log(`oh its ${headers}`)}
            {headers.map((header, index)=><TableCell key={index}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log('oh its rows',rows)}
          {getRowsData(rows)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
