// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Get campaign
   */
  retrieve(campaignID: string, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.get(path`/campaigns/${campaignID}`, options);
  }

  /**
   * List campaigns
   */
  list(options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/campaigns', options);
  }
}

export interface Campaign {
  id?: string;

  createdAt?: string;

  listIds?: Array<string>;

  name?: string;

  orgId?: string;

  sentAt?: string | null;

  status?: 'DRAFT' | 'SCHEDULED' | 'SENDING' | 'SENT';

  subject?: string;
}

export interface CampaignRetrieveResponse {
  campaign?: Campaign;
}

export interface CampaignListResponse {
  campaigns?: Array<Campaign>;
}

export declare namespace Campaigns {
  export {
    type Campaign as Campaign,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignListResponse as CampaignListResponse,
  };
}
