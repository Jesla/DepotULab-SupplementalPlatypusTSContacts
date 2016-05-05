import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SingleviewViewControl extends BaseViewControl {
    templateString: string = require('./singleview.vc.html');

    context: any = {};
}

register.viewControl('singleview-vc', SingleviewViewControl);
