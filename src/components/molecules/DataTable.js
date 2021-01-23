import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    body: {
        fontSize: 10,
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

export default function DataTable({ data }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Produkt</StyledTableCell>
                        <StyledTableCell align="center">Ilość</StyledTableCell>
                        <StyledTableCell align="center">Cena</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((product) => (
                        <StyledTableRow key={product.name}>
                            <StyledTableCell component="th" scope="row">
                                {product.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{1}</StyledTableCell>
                            <StyledTableCell align="center">{product.price}</StyledTableCell>
                            <StyledTableCell align="center"><Button variant="contained" color="primary">
                                KUP
      </Button></StyledTableCell>
                            <StyledTableCell align="center"><Button variant="contained" color="secondary">
                                X
      </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
