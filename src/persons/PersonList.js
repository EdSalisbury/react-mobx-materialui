import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Paper from 'material-ui/Paper';
import { SortingState, LocalSorting } from '@devexpress/dx-react-grid'
import { Grid, TableView, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui'

@inject('PersonStore')
@observer
class PersonList extends Component {
    async componentDidMount() {
        document.title = 'Persons';
        await this.props.PersonStore.refreshPersonList();
    }

    render() {
        const {PersonStore} = this.props;

        const columns = [{ name: 'name.first', title: 'Name' },
            { name: 'email', title: 'Email' },
            { name: 'balance', title: 'Balance' }];

        return (
            <Paper>
                <Grid
                    columns={columns}
                    rows={PersonStore.personData}>
                    <SortingState />
                    <LocalSorting />
                    <TableView />
                    <TableHeaderRow allowSorting />
                </Grid>
            </Paper>
        );
    }
}

export default PersonList;