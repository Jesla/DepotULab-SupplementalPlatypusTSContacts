import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import ContactserviceService from '../../services/contactservice/contactservice.svc';

export default class ContactsRepository extends BaseRepository {

    constructor(private contactSvc: ContactserviceService) {
        super();
    }

    getAllContacts(): async.IThenable<Array<models.ISingleContact>> {
        return this.contactSvc.getAllContacts();
    }

    seeSingleContact(nameInput: string): async.IThenable<models.ISingleContact> {
        return this.contactSvc.seeSingleContact(nameInput);
    }

    addContact(contact: models.ISingleContact): async.IThenable<string> {
        return this.contactSvc.addContact(contact);
    }
}

register.injectable('contacts-repo', ContactsRepository, [ContactserviceService]);
