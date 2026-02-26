// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.lists.retrieve',
    fullyQualifiedName: 'lists.retrieve',
    httpMethod: 'get',
    httpPath: '/lists/{listId}',
  },
  {
    clientCallName: 'client.lists.list',
    fullyQualifiedName: 'lists.list',
    httpMethod: 'get',
    httpPath: '/lists',
  },
  {
    clientCallName: 'client.lists.subscribers.list',
    fullyQualifiedName: 'lists.subscribers.list',
    httpMethod: 'get',
    httpPath: '/lists/{listId}/subscribers',
  },
  {
    clientCallName: 'client.lists.subscribers.add',
    fullyQualifiedName: 'lists.subscribers.add',
    httpMethod: 'post',
    httpPath: '/lists/{listId}/subscribers',
  },
  {
    clientCallName: 'client.lists.subscribers.remove',
    fullyQualifiedName: 'lists.subscribers.remove',
    httpMethod: 'delete',
    httpPath: '/lists/{listId}/subscribers/{subscriberId}',
  },
  {
    clientCallName: 'client.customers.retrieve',
    fullyQualifiedName: 'customers.retrieve',
    httpMethod: 'get',
    httpPath: '/customers/{customerId}',
  },
  {
    clientCallName: 'client.customers.update',
    fullyQualifiedName: 'customers.update',
    httpMethod: 'patch',
    httpPath: '/customers/{customerId}',
  },
  {
    clientCallName: 'client.customers.list',
    fullyQualifiedName: 'customers.list',
    httpMethod: 'get',
    httpPath: '/customers',
  },
  {
    clientCallName: 'client.campaigns.retrieve',
    fullyQualifiedName: 'campaigns.retrieve',
    httpMethod: 'get',
    httpPath: '/campaigns/{campaignId}',
  },
  {
    clientCallName: 'client.campaigns.list',
    fullyQualifiedName: 'campaigns.list',
    httpMethod: 'get',
    httpPath: '/campaigns',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
