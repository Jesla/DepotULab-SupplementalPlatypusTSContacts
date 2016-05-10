import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactsRepository from '../../repositories/contacts/contacts.repo';

export default class SingleviewViewControl extends BaseViewControl {
    templateString: string = require('./singleview.vc.html');

       context = {
        contact: <models.ISingleContact>{}
    };
    
    //     goToHome(): void {
    //     this.navigator.navigate(HomeViewControl);
    // }
// HOW DO I DO THIS?


}
register.viewControl('singleview-vc', SingleviewViewControl);
