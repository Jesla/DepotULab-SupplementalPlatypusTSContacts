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
    };

    constructor(private contacts: ContactsRepository) {
        super();
    }

    addToContacts(): void {
        let singleContact: models.ISingleContact = {
            nameInput: this.context.nameInput,
            emailInput: this.context.emailInput,
            phoneInput: this.context.phoneInput
        };

        this.contacts.addContact(singleContact).then((success) => {
            console.log(success);
            this.navigator.navigate(HomeViewControl);
        }, (err) => {
            console.log(err);
        });
    }

    seeSingleContact(): void {
        this.navigator.navigate("singleview-vc", {
            parameters: {
                nameContact: this.context.nameInput,
                emailContact: this.context.emailInput,
                phoneContact: this.context.phoneInput
            }
        });
    }
    
}

register.viewControl('home-vc', HomeViewControl, [ContactsRepository]);
