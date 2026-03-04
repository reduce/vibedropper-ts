// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArticlesAPI from './articles';
import {
  ArticleCreateParams,
  ArticleCreateResponse,
  ArticleListParams,
  ArticleListResponse,
  Articles,
  KnowledgeBaseArticle,
} from './articles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  articles: ArticlesAPI.Articles = new ArticlesAPI.Articles(this._client);

  /**
   * Get a knowledge base
   */
  retrieve(kbID: string, options?: RequestOptions): APIPromise<KnowledgeBaseRetrieveResponse> {
    return this._client.get(path`/knowledge-bases/${kbID}`, options);
  }

  /**
   * Update a knowledge base
   */
  update(
    kbID: string,
    body: KnowledgeBaseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseUpdateResponse> {
    return this._client.patch(path`/knowledge-bases/${kbID}`, { body, ...options });
  }

  /**
   * Returns all knowledge bases ordered by sortOrder then creation date.
   */
  list(options?: RequestOptions): APIPromise<KnowledgeBaseListResponse> {
    return this._client.get('/knowledge-bases', options);
  }

  /**
   * Delete a knowledge base
   */
  delete(kbID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/knowledge-bases/${kbID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KnowledgeBase {
  id?: string;

  _count?: KnowledgeBase._Count;

  createdAt?: string;

  description?: string | null;

  name?: string;

  orgId?: string;

  slug?: string;

  sortOrder?: number;

  updatedAt?: string;
}

export namespace KnowledgeBase {
  export interface _Count {
    articles?: number;

    categories?: number;
  }
}

export interface KnowledgeBaseRetrieveResponse {
  knowledgeBase?: KnowledgeBase;
}

export interface KnowledgeBaseUpdateResponse {
  knowledgeBase?: KnowledgeBase;
}

export interface KnowledgeBaseListResponse {
  knowledgeBases?: Array<KnowledgeBase>;
}

export interface KnowledgeBaseUpdateParams {
  description?: string | null;

  name?: string;

  sortOrder?: number;
}

KnowledgeBases.Articles = Articles;

export declare namespace KnowledgeBases {
  export {
    type KnowledgeBase as KnowledgeBase,
    type KnowledgeBaseRetrieveResponse as KnowledgeBaseRetrieveResponse,
    type KnowledgeBaseUpdateResponse as KnowledgeBaseUpdateResponse,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseUpdateParams as KnowledgeBaseUpdateParams,
  };

  export {
    Articles as Articles,
    type KnowledgeBaseArticle as KnowledgeBaseArticle,
    type ArticleCreateResponse as ArticleCreateResponse,
    type ArticleListResponse as ArticleListResponse,
    type ArticleCreateParams as ArticleCreateParams,
    type ArticleListParams as ArticleListParams,
  };
}
