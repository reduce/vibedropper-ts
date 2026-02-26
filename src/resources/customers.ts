// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Get customer
   */
  retrieve(customerID: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/customers/${customerID}`, options);
  }

  /**
   * Update customer
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.patch(path`/customers/${customerID}`, { body, ...options });
  }

  /**
   * List customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/customers', { query, ...options });
  }
}

export interface Customer {
  id?: string;

  averageOrderValue?: number;

  email?: string;

  lastPurchaseDate?: string | null;

  lists?: Array<unknown>;

  name?: string | null;

  orgId?: string;

  pickupLocation?: unknown | null;

  purchaseCount?: number;

  region?: unknown | null;

  roles?: Array<unknown>;

  totalSpent?: number;
}

export interface CustomerRetrieveResponse {
  customer?: Customer;
}

export interface CustomerUpdateResponse {
  customer?: Customer;
}

export interface CustomerListResponse {
  customers?: Array<Customer>;

  pagination?: CustomerListResponse.Pagination;
}

export namespace CustomerListResponse {
  export interface Pagination {
    limit?: number;

    page?: number;

    total?: number;

    totalPages?: number;
  }
}

export interface CustomerUpdateParams {
  name?: string;

  pickupLocationId?: string | null;

  regionId?: string | null;
}

export interface CustomerListParams {
  limit?: number;

  page?: number;

  search?: string;
}

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
