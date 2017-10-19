import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SortingState, LocalSorting, PagingState, LocalPaging } from '@devexpress/dx-react-grid'
import { Grid, TableView, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-bootstrap3'

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

                <Grid
                    columns={columns}
                    rows={PersonStore.personData}
                    >
                    <PagingState
                        defaultCurrentPage={0}
                        defaultPageSize={5}
                    />
                    <LocalPaging />
                    <SortingState />
                    <LocalSorting />
                    <TableView />
                    <TableHeaderRow allowSorting />
                    <PagingPanel allowedPageSizes={[5, 10, 100, 1000]} />
                </Grid>
        );
    }
}

export default PersonList;