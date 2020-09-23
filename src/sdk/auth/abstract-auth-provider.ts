import { Observable } from 'rxjs';
import { AuthProvider } from './auth-provider-interfaces';

/**
 * Abstract Authorization provider class
 */
export abstract class IlandAbstractAuthProvider implements AuthProvider {

  protected _tokenObservable: Observable<string>;

  abstract async getToken(): Promise<string>;

  abstract getTokenSync(): string | undefined;

  abstract async logout(options?: any): Promise<any>;

  abstract async getAuthenticatedUsername(): Promise<string>;

  /**
   * Return an Observable to get an up to date token over time.
   * @returns {Observable<string>}
   */
  getTokenObservable(): Observable<string> {
    return this._tokenObservable;
  }
}
