import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

@inject('PersonStore')
@observer
class PersonList extends Component {
    async componentDidMount() {
        document.title = 'Persons';
        await this.props.PersonStore.refreshPersonList();
    }

    render() {
        const {PersonStore} = this.props;

        return (
            <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {PersonStore.personData.map(person =>
                        <TableRow>
                            <TableCell>{person.name.first} {person.name.last}</TableCell>
                            <TableCell>{person.email}</TableCell>
                            <TableCell>{person.balance}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
        );
    }
}

export default PersonList;