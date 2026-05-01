// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Access email campaigns (read-only)
 */
export class Campaigns extends APIResource {
  /**
   * Get a campaign
   */
  retrieve(campaignID: string, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.get(path`/campaigns/${campaignID}`, options);
  }

  /**
   * Returns all campaigns for the organization ordered by creation date descending.
   * No pagination.
   */
  list(options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/campaigns', options);
  }
}

export interface Campaign {
  id?: string;

  createdAt?: string;

  fromEmail?: string;

  fromName?: string;

  name?: string;

  orgId?: string;

  previewText?: string | null;

  replyTo?: string | null;

  scheduledAt?: string | null;

  sentAt?: string | null;

  status?: 'DRAFT' | 'SCHEDULED' | 'SENDING' | 'SENT';

  subject?: string;

  totalBounces?: number;

  /**
   * Total click events
   */
  totalClicks?: number;

  /**
   * Unique opens
   */
  totalOpens?: number;

  totalSent?: number;

  totalUnsubscribes?: number;

  /**
   * Total view events (all pixel loads)
   */
  totalViews?: number;

  uniqueClicks?: number;

  updatedAt?: string;
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
