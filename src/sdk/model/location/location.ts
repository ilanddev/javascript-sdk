import { LocationJson } from './__json__/location-json';

export class Location {

  constructor(private _json: LocationJson) {
  }

  get uuid(): string {
    return this._json.uuid;
  }

  get name(): string {
    return this._json.name;
  }
}
