import { IDialog } from './idialog';
import * as builder from 'botbuilder';
import * as restify from 'restify';
import { AuthHelper } from '../helpers/authHelper';
import { HttpHelper } from '../helpers/httpHelper';

export class rootDialog implements IDialog {
    constructor(private authHelper: AuthHelper) {
        this.waterfall = [].concat(
            (session, results, next) => {
                // TODO: capture anything you need to on the original message
                next();
            },
            authHelper.getAccessToken(),
            (session, results, next) => {
                if (results.response != null) {
                    let headers = {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + results.response
                    };
                    HttpHelper.getJson(headers, "graph.microsoft.com", "/v1.0/me").then((data:any) => {
                        session.endConversation(`I don't do much, but I know your name is ${data.displayName}`);
                    }, (err) => {
                        session.endConversation('Opps...something went wrong')
                    });
                }
                else
                    session.endConversation('Opps...something went wrong');
            }
        );
    }
    waterfall;
}

export default rootDialog;