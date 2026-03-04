// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from '../customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscribers extends APIResource {
  /**
   * Returns all subscribers for the list ordered by subscribe date descending.
   * Includes linked customer data.
   */
  list(listID: string, options?: RequestOptions): APIPromise<SubscriberListResponse> {
    return this._client.get(path`/lists/${listID}/subscribers`, options);
  }

  /**
   * Creates or updates the matching customer record and adds a subscriber entry.
   * Returns 400 with code `duplicate` if already subscribed.
   */
  add(
    listID: string,
    body: SubscriberAddParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberAddResponse> {
    return this._client.post(path`/lists/${listID}/subscribers`, { body, ...options });
  }

  /**
   * Remove a subscriber from a list
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

  customer?: CustomersAPI.Customer | null;

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

  /**
   * Arbitrary key-value metadata
   */
  customFields?: unknown;

  name?: string;

  /**
   * Pickup location ID (must belong to the given regionId)
   */
  pickupLocationId?: string;

  /**
   * Region ID to assign to the customer
   */
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
