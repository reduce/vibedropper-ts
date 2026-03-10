// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ListsAPI from './lists/lists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage forms and submissions
 */
export class Forms extends APIResource {
  /**
   * Get a form
   */
  retrieve(formID: string, options?: RequestOptions): APIPromise<FormRetrieveResponse> {
    return this._client.get(path`/forms/${formID}`, options);
  }

  /**
   * Update a form
   */
  update(
    formID: string,
    body: FormUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FormUpdateResponse> {
    return this._client.put(path`/forms/${formID}`, { body, ...options });
  }

  /**
   * List forms
   */
  list(
    query: FormListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FormListResponse> {
    return this._client.get('/forms', { query, ...options });
  }

  /**
   * Delete a form
   */
  delete(formID: string, options?: RequestOptions): APIPromise<FormDeleteResponse> {
    return this._client.delete(path`/forms/${formID}`, options);
  }

  /**
   * List form submissions
   */
  listSubmissions(
    formID: string,
    query: FormListSubmissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FormListSubmissionsResponse> {
    return this._client.get(path`/forms/${formID}/submissions`, { query, ...options });
  }
}

export interface Form {
  id?: string;

  _count?: Form._Count;

  createdAt?: string;

  description?: string | null;

  listId?: string | null;

  orgId?: string;

  slug?: string;

  status?: 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

  successMessage?: string | null;

  title?: string;

  updatedAt?: string;
}

export namespace Form {
  export interface _Count {
    formSubmissions?: number;
  }
}

export interface FormRetrieveResponse {
  form?: Form;
}

export interface FormUpdateResponse {
  form?: Form;
}

export interface FormListResponse {
  forms?: Array<Form>;

  pagination?: ListsAPI.Pagination;
}

export interface FormDeleteResponse {
  success?: boolean;
}

export interface FormListSubmissionsResponse {
  pagination?: ListsAPI.Pagination;

  submissions?: Array<FormListSubmissionsResponse.Submission>;
}

export namespace FormListSubmissionsResponse {
  export interface Submission {
    id?: string;

    createdAt?: string;

    /**
     * Key-value pairs of submitted form fields
     */
    data?: unknown;

    formId?: string;

    subscriber?: Submission.Subscriber | null;
  }

  export namespace Submission {
    export interface Subscriber {
      id?: string;

      email?: string;

      name?: string | null;
    }
  }
}

export interface FormUpdateParams {
  description?: string | null;

  /**
   * List to subscribe form submitters to
   */
  listId?: string | null;

  status?: 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

  successMessage?: string | null;

  title?: string;
}

export interface FormListParams {
  limit?: number;

  page?: number;

  /**
   * Filter by status. Omit or use "all" to return all forms.
   */
  status?: 'DRAFT' | 'ACTIVE' | 'ARCHIVED' | 'all';
}

export interface FormListSubmissionsParams {
  limit?: number;

  page?: number;
}

export declare namespace Forms {
  export {
    type Form as Form,
    type FormRetrieveResponse as FormRetrieveResponse,
    type FormUpdateResponse as FormUpdateResponse,
    type FormListResponse as FormListResponse,
    type FormDeleteResponse as FormDeleteResponse,
    type FormListSubmissionsResponse as FormListSubmissionsResponse,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormListSubmissionsParams as FormListSubmissionsParams,
  };
}
