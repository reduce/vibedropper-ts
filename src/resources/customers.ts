// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ListsAPI from './lists/lists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage customers
 */
export class Customers extends APIResource {
  /**
   * Get a customer
   */
  retrieve(customerID: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/customers/${customerID}`, options);
  }

  /**
   * Update a customer
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

  addressLine1?: string | null;

  addressLine2?: string | null;

  averageOrderValue?: number;

  city?: string | null;

  country?: string | null;

  createdAt?: string;

  email?: string;

  firstName?: string | null;

  lastName?: string | null;

  lastPurchaseDate?: string | null;

  /**
   * Lists this customer is subscribed to
   */
  lists?: Array<Customer.List>;

  name?: string | null;

  orgId?: string;

  pickupLocation?: unknown | null;

  postalCode?: string | null;

  purchaseCount?: number;

  region?: unknown | null;

  /**
   * Roles assigned to this customer
   */
  roles?: Array<Customer.Role>;

  state?: string | null;

  /**
   * Total amount spent across all orders
   */
  totalSpent?: number;

  updatedAt?: string;
}

export namespace Customer {
  export interface List {
    id?: string;

    name?: string;
  }

  export interface Role {
    id?: string;

    color?: string | null;

    description?: string | null;

    name?: string;
  }
}

export interface CustomerRetrieveResponse {
  customer?: Customer;
}

export interface CustomerUpdateResponse {
  customer?: Customer;
}

export interface CustomerListResponse {
  customers?: Array<Customer>;

  pagination?: ListsAPI.Pagination;
}

export interface CustomerUpdateParams {
  addressLine1?: string | null;

  addressLine2?: string | null;

  city?: string | null;

  country?: string | null;

  firstName?: string | null;

  lastName?: string | null;

  name?: string;

  pickupLocationId?: string | null;

  postalCode?: string | null;

  regionId?: string | null;

  state?: string | null;
}

export interface CustomerListParams {
  limit?: number;

  page?: number;

  /**
   * Search by name or email (case-insensitive)
   */
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
