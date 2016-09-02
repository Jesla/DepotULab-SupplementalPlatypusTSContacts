import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import ContactsRepository from '../../repositories/contacts/contacts.repo';

export default class SingleviewViewControl extends BaseViewControl {
    templateString: string = require('./singleview.vc.html');

    context = {
        contact: <models.ISingleContact>{}
    };

    constructor(private contacts: ContactsRepository) {
        super();
    }

    goToHome(): void {
        this.navigator.navigate(HomeViewControl);
    }


    navigatedTo(routeParams: { contactid: string; }): void {
        console.log(routeParams.contactid);
        this.context.contact = this.contacts.seeSingleContact(routeParams.contactid);
    }

}
register.viewControl('singleview-vc', SingleviewViewControl, [ContactsRepository]);
