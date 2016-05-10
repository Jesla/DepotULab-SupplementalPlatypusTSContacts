import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import ContactsRepository from '../../repositories/contacts/contacts.repo';

export default class SingleviewViewControl extends BaseViewControl {
    templateString: string = require('./singleview.vc.html');

       context = {
        contact: <models.ISingleContact>{},
        nameInput: "",
        emailInput: "",
        phoneInput: "",
    };
        
        goToHome(): void {
        this.navigator.navigate(HomeViewControl);
    }


navigatedTo(routeParams: {contactid: string; }): void {
    console.log(routeParams.contactid); // This gets the actual route parameter (the contact name)
    this.context.seeSingleContact(routeParams.contactid)
    // Call the contact repo single contact function
    // When you get the single contact back, set it on the context of this page
    // then you're done
}

}
register.viewControl('singleview-vc', SingleviewViewControl);
