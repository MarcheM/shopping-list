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
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const selfAlign = "left"

const useStyles = makeStyles({
    table: {
        width: "100%",
    },
});

export default function DataTable({ data }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align={selfAlign}>Produkt</StyledTableCell>
                        <StyledTableCell align={selfAlign}>Ilość</StyledTableCell>
                        <StyledTableCell align={selfAlign}></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((product) => (
                        <StyledTableRow key={product.name}>
                            <StyledTableCell align={selfAlign} component="th" scope="row">
                                <b> {product.name}</b>
                            </StyledTableCell>
                            <StyledTableCell align={selfAlign}>{product.quantity}</StyledTableCell>
                            <StyledTableCell align={selfAlign}>
                                <div style={{ marginBottom: "8px" }}><Button variant="contained" color="primary">Kup</Button></div>
                                <div ><Button variant="contained" color="secondary">Usuń</Button></div>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
