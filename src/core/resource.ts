// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Spec } from '../client';

export abstract class APIResource {
  protected _client: Spec;

  constructor(client: Spec) {
    this._client = client;
  }
}
