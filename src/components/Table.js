import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',

  },
  table: {
    minWidth: 700

  },
});

let id = 0;
function createData(Id,Country,Pin,Address,City,State,Zip) {
  id += 1;
  return {id,Country,Pin,Address,City,State,Zip};
}

const rows = [
  createData("",'Kane',1409276011,'448 Shelburne Lane','Sugar Grove','IL',60554),
  createData("",'abc',1409276012,'xyz','123','uv',60553),
  createData("",'a1',1409276013,'b1','c1','d1',60554),
  createData("",'a2',1409276014,'b2','c2','d2',60555),
  createData("",'a3',1409276015,'b3','c3','d3',60556),
  createData("",'a4',1409276016,'b4','c4','d4',60557),
  createData("",'a5',1409276017,'b5','c5','d5',60558)
];

function TableData(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
    <p style={{textAlign:"center"}}>Property list</p>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Country</TableCell>
            <TableCell >Pin</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >City</TableCell>
            <TableCell >State</TableCell>
            <TableCell >Zip</TableCell>
          </TableRow>
        </TableHead>
     <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.Country}</TableCell>
              <TableCell>{row.Pin}</TableCell>
              <TableCell >{row.Address}</TableCell>
              <TableCell >{row.City}</TableCell>
              <TableCell >{row.State}</TableCell>
              <TableCell >{row.Zip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

  );
}

TableData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableData);
