import { Observable, Subscriber } from 'rxjs';
import { IlandDirectGrantAuthConfig, IlandDirectGrantAuthProvider } from '../direct-grant-auth-provider';

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
