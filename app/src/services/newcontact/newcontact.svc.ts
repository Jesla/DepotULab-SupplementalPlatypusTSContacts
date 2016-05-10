import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class NewcontactService extends BaseService {

}

register.injectable('newcontact-svc', NewcontactService);
