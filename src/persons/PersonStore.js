import { observable, action, computed } from 'mobx';
import { collectPersonList } from './api';

class PersonStore {
    @observable personData = [];

    @action
    refreshPersonList = async () => {
        const personList = await collectPersonList();
        const updatedPersonList = personList.map(person => {
            let oldPerson = this.personData.filter(p => p.guid === person.guid)[0];
            return {
                ...oldPerson,
                ...person
            };
        });
        this.personData = updatedPersonList;
    };

    @computed
    get persons() {
        return this.personData.map(person => {
            return {
                ...person,
            };
        });
    }
}

const store = new PersonStore();

export default store;