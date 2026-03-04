// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ListsAPI from './lists/lists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pages extends APIResource {
  /**
   * Get a page
   */
  retrieve(pageID: string, options?: RequestOptions): APIPromise<PageRetrieveResponse> {
    return this._client.get(path`/pages/${pageID}`, options);
  }

  /**
   * Update a page
   */
  update(
    pageID: string,
    body: PageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageUpdateResponse> {
    return this._client.put(path`/pages/${pageID}`, { body, ...options });
  }

  /**
   * List pages
   */
  list(
    query: PageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageListResponse> {
    return this._client.get('/pages', { query, ...options });
  }

  /**
   * Delete a page
   */
  delete(pageID: string, options?: RequestOptions): APIPromise<PageDeleteResponse> {
    return this._client.delete(path`/pages/${pageID}`, options);
  }
}

export interface Page {
  id?: string;

  _count?: Page._Count;

  createdAt?: string;

  description?: string | null;

  name?: string;

  orgId?: string;

  slug?: string;

  status?: 'DRAFT' | 'ACTIVE' | 'ENDED' | 'ARCHIVED';

  updatedAt?: string;
}

export namespace Page {
  export interface _Count {
    items?: number;
  }
}

export interface PageRetrieveResponse {
  page?: Page;
}

export interface PageUpdateResponse {
  page?: Page;
}

export interface PageListResponse {
  pages?: Array<Page>;

  pagination?: ListsAPI.Pagination;
}

export interface PageDeleteResponse {
  success?: boolean;
}

export interface PageUpdateParams {
  description?: string | null;

  name?: string;

  status?: 'DRAFT' | 'ACTIVE' | 'ENDED' | 'ARCHIVED';
}

export interface PageListParams {
  limit?: number;

  page?: number;

  /**
   * Filter by status. Omit or use "all" to return all pages.
   */
  status?: 'DRAFT' | 'ACTIVE' | 'ENDED' | 'ARCHIVED' | 'all';
}

export declare namespace Pages {
  export {
    type Page as Page,
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageListResponse as PageListResponse,
    type PageDeleteResponse as PageDeleteResponse,
    type PageUpdateParams as PageUpdateParams,
    type PageListParams as PageListParams,
  };
}
