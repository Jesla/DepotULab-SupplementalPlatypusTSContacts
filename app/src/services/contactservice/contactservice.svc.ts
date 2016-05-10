import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class ContactserviceService extends BaseService {

    getAllContacts(): async.IAjaxThenable<Array<models.ISingleContact>> {
        return this.http.json<Array<models.ISingleContact>>({
            method: 'GET',
            url: this.host + '/singleview'
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    seeSingleContact(nameInput: string): async.IAjaxThenable<models.ISingleContact> {
        return this.http.json<models.ISingleContact>({
            method: 'GET',
            url: this.host + '/singleview' + nameInput
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    addContact(singleContact: models.ISingleContact): async.IAjaxThenable<string> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/singleview',
            data: singleContact
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}




register.injectable('contactservie-svc', ContactserviceService);

