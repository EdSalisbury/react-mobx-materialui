import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'


@inject('PersonStore')
@observer
class PersonList extends Component {
    async componentDidMount() {
        document.title = 'Persons';
        await this.props.PersonStore.refreshPersonList();
    }

    render() {
        const { PersonStore } = this.props;

        return <MuiThemeProvider>
            <div>
                <h1>Person List</h1>
                <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Balance</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {PersonStore.personData.map(person =>
                    <TableRow displaySelectAll={false}>
                        <TableRowColumn>{person.name.first} {person.name.last}</TableRowColumn>
                        <TableRowColumn>{person.email}</TableRowColumn>
                        <TableRowColumn>{person.balance}</TableRowColumn>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>
        </MuiThemeProvider>
    }
}

export default PersonList;