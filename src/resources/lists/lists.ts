// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscribersAPI from './subscribers';
import {
  Subscriber,
  SubscriberAddParams,
  SubscriberAddResponse,
  SubscriberListResponse,
  SubscriberRemoveParams,
  SubscriberRemoveResponse,
  Subscribers,
} from './subscribers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  subscribers: SubscribersAPI.Subscribers = new SubscribersAPI.Subscribers(this._client);

  /**
   * Get a list
   */
  retrieve(listID: string, options?: RequestOptions): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/lists/${listID}`, options);
  }

  /**
   * List lists
   */
  list(
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    return this._client.get('/lists', { query, ...options });
  }
}

export interface List {
  id?: string;

  _count?: List._Count;

  createdAt?: string;

  description?: string | null;

  name?: string;

  orgId?: string;

  updatedAt?: string;
}

export namespace List {
  export interface _Count {
    subscribers?: number;
  }
}

export interface ListRetrieveResponse {
  list?: List;
}

export interface ListListResponse {
  lists?: Array<List>;

  pagination?: ListListResponse.Pagination;
}

export namespace ListListResponse {
  export interface Pagination {
    limit?: number;

    page?: number;

    total?: number;

    totalPages?: number;
  }
}

export interface ListListParams {
  limit?: number;

  page?: number;
}

Lists.Subscribers = Subscribers;

export declare namespace Lists {
  export {
    type List as List,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListListResponse as ListListResponse,
    type ListListParams as ListListParams,
  };

  export {
    Subscribers as Subscribers,
    type Subscriber as Subscriber,
    type SubscriberListResponse as SubscriberListResponse,
    type SubscriberAddResponse as SubscriberAddResponse,
    type SubscriberRemoveResponse as SubscriberRemoveResponse,
    type SubscriberAddParams as SubscriberAddParams,
    type SubscriberRemoveParams as SubscriberRemoveParams,
  };
}
