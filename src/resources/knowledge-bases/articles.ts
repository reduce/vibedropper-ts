// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ListsAPI from '../lists/lists';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage knowledge bases and articles
 */
export class Articles extends APIResource {
  /**
   * Create an article
   */
  create(
    kbID: string,
    body: ArticleCreateParams,
    options?: RequestOptions,
  ): APIPromise<ArticleCreateResponse> {
    return this._client.post(path`/knowledge-bases/${kbID}/articles`, { body, ...options });
  }

  /**
   * List articles in a knowledge base
   */
  list(
    kbID: string,
    query: ArticleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArticleListResponse> {
    return this._client.get(path`/knowledge-bases/${kbID}/articles`, { query, ...options });
  }
}

export interface KnowledgeBaseArticle {
  id?: string;

  category?: KnowledgeBaseArticle.Category | null;

  categoryId?: string | null;

  /**
   * HTML content
   */
  content?: string;

  createdAt?: string;

  excerpt?: string | null;

  knowledgeBaseId?: string;

  published?: boolean;

  slug?: string;

  sortOrder?: number;

  title?: string;

  updatedAt?: string;
}

export namespace KnowledgeBaseArticle {
  export interface Category {
    id?: string;

    name?: string;

    slug?: string;
  }
}

export interface ArticleCreateResponse {
  article?: KnowledgeBaseArticle;
}

export interface ArticleListResponse {
  articles?: Array<KnowledgeBaseArticle>;

  pagination?: ListsAPI.Pagination;
}

export interface ArticleCreateParams {
  title: string;

  categoryId?: string | null;

  /**
   * HTML content
   */
  content?: string;

  excerpt?: string | null;

  published?: boolean;
}

export interface ArticleListParams {
  limit?: number;

  page?: number;
}

export declare namespace Articles {
  export {
    type KnowledgeBaseArticle as KnowledgeBaseArticle,
    type ArticleCreateResponse as ArticleCreateResponse,
    type ArticleListResponse as ArticleListResponse,
    type ArticleCreateParams as ArticleCreateParams,
    type ArticleListParams as ArticleListParams,
  };
}
