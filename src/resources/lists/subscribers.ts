// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscribers extends APIResource {
  /**
   * List subscribers
   */
  list(listID: string, options?: RequestOptions): APIPromise<SubscriberListResponse> {
    return this._client.get(path`/lists/${listID}/subscribers`, options);
  }

  /**
   * Add subscriber
   */
  add(
    listID: string,
    body: SubscriberAddParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberAddResponse> {
    return this._client.post(path`/lists/${listID}/subscribers`, { body, ...options });
  }

  /**
   * Remove subscriber
   */
  remove(
    subscriberID: string,
    params: SubscriberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberRemoveResponse> {
    const { listId } = params;
    return this._client.delete(path`/lists/${listId}/subscribers/${subscriberID}`, options);
  }
}

export interface Subscriber {
  id?: string;

  customer?: unknown | null;

  customFields?: unknown | null;

  email?: string;

  listId?: string;

  name?: string | null;

  status?: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'PENDING' | 'BOUNCED';

  subscribedAt?: string;
}

export interface SubscriberListResponse {
  subscribers?: Array<Subscriber>;
}

export interface SubscriberAddResponse {
  subscriber?: Subscriber;
}

export interface SubscriberRemoveResponse {
  success?: boolean;
}

export interface SubscriberAddParams {
  email: string;

  customFields?: unknown;

  name?: string;

  pickupLocationId?: string;

  regionId?: string;
}

export interface SubscriberRemoveParams {
  listId: string;
}

export declare namespace Subscribers {
  export {
    type Subscriber as Subscriber,
    type SubscriberListResponse as SubscriberListResponse,
    type SubscriberAddResponse as SubscriberAddResponse,
    type SubscriberRemoveResponse as SubscriberRemoveResponse,
    type SubscriberAddParams as SubscriberAddParams,
    type SubscriberRemoveParams as SubscriberRemoveParams,
  };
}
