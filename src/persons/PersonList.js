import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('PersonStore')
@observer
class PersonList extends Component {
    async componentDidMount() {
        document.title = 'Persons';
        await this.props.PersonStore.refreshPersonList();
    }

    render() {
        const { PersonStore } = this.props;

        return (
            <div>
                <h1>Person List</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                    </tr>

                    {PersonStore.personData.map(person =>
                    <tr>
                        <td>{person.name.first} {person.name.last}</td>
                        <td>{person.email}</td>
                        <td>{person.balance}</td>
                    </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default PersonList;