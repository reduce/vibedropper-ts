// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Vibedropper } from '../client';

export abstract class APIResource {
  protected _client: Vibedropper;

  constructor(client: Vibedropper) {
    this._client = client;
  }
}
