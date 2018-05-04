import { IlandDirectGrantAuthConfig, IlandDirectGrantAuthProvider } from '../direct-grant-auth-provider';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';

export class MockIlandDirectGrantAuthProvider extends IlandDirectGrantAuthProvider {

  private _tokenO: Observable<string>;

  constructor(private _conf: IlandDirectGrantAuthConfig) {
    super(_conf);
    this._tokenO = Observable.create((observable: Subscriber<string>) => {
      observable.next('fake-auth-token-2');
    });
  }

  getTokenObservable(): Observable<string> {
    return this._tokenO;
  }
}
