# Lists

Types:

- <code><a href="./src/resources/lists/lists.ts">List</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListListResponse</a></code>

Methods:

- <code title="get /lists/{listId}">client.lists.<a href="./src/resources/lists/lists.ts">retrieve</a>(listID) -> ListRetrieveResponse</code>
- <code title="get /lists">client.lists.<a href="./src/resources/lists/lists.ts">list</a>({ ...params }) -> ListListResponse</code>

## Subscribers

Types:

- <code><a href="./src/resources/lists/subscribers.ts">Subscriber</a></code>
- <code><a href="./src/resources/lists/subscribers.ts">SubscriberListResponse</a></code>
- <code><a href="./src/resources/lists/subscribers.ts">SubscriberAddResponse</a></code>
- <code><a href="./src/resources/lists/subscribers.ts">SubscriberRemoveResponse</a></code>

Methods:

- <code title="get /lists/{listId}/subscribers">client.lists.subscribers.<a href="./src/resources/lists/subscribers.ts">list</a>(listID) -> SubscriberListResponse</code>
- <code title="post /lists/{listId}/subscribers">client.lists.subscribers.<a href="./src/resources/lists/subscribers.ts">add</a>(listID, { ...params }) -> SubscriberAddResponse</code>
- <code title="delete /lists/{listId}/subscribers/{subscriberId}">client.lists.subscribers.<a href="./src/resources/lists/subscribers.ts">remove</a>(subscriberID, { ...params }) -> SubscriberRemoveResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">Customer</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerListResponse</a></code>

Methods:

- <code title="get /customers/{customerId}">client.customers.<a href="./src/resources/customers.ts">retrieve</a>(customerID) -> CustomerRetrieveResponse</code>
- <code title="patch /customers/{customerId}">client.customers.<a href="./src/resources/customers.ts">update</a>(customerID, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /customers">client.customers.<a href="./src/resources/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">Campaign</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignListResponse</a></code>

Methods:

- <code title="get /campaigns/{campaignId}">client.campaigns.<a href="./src/resources/campaigns.ts">retrieve</a>(campaignID) -> CampaignRetrieveResponse</code>
- <code title="get /campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">list</a>() -> CampaignListResponse</code>
