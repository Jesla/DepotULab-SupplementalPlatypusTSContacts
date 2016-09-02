import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactsRepository from '../../repositories/contacts/contacts.repo';
import SingleviewViewControl from '../singleview/singleview.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        nameInput: "",
        emailInput: "",
        phoneInput: "",
        contacts: []
    };

    constructor(private contacts: ContactsRepository) {
        super();
    }

    navigatedTo() {
        this.context.contacts = this.contacts.getAllContacts();
    }

    addToContacts(): void {
        let singleContact: models.ISingleContact = {
            nameInput: this.context.nameInput,
            emailInput: this.context.emailInput,
            phoneInput: this.context.phoneInput
        };

        this.contacts.addContact(singleContact);
    }

    seeSingleContact(nameInput: string): void {
        this.navigator.navigate("singleview-vc", {
            parameters: {
                contactid: nameInput,
            }
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [ContactsRepository]);
