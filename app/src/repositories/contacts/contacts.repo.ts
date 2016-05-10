import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class ContactsRepository extends BaseRepository {

    contactsArray: Array<models.ISingleContact> = [];

    getAllContacts() {
        return this.contactsArray;
    }

    seeSingleContact(nameInput: string) {
        for (let i = 0; i < this.contactsArray.length; i++) {
            if (this.contactsArray[i].nameInput === nameInput) {
                return this.contactsArray[i];
            }
        }
    }
    addContact(contact: models.ISingleContact) {
        this.contactsArray.push(contact)
    }
}

register.injectable('contacts-repo', ContactsRepository);
