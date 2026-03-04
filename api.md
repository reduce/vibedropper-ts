# Lists

Types:

- <code><a href="./src/resources/lists/lists.ts">List</a></code>
- <code><a href="./src/resources/lists/lists.ts">Pagination</a></code>
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
- <code title="get /campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">list</a>({ ...params }) -> CampaignListResponse</code>

# Forms

Types:

- <code><a href="./src/resources/forms.ts">Form</a></code>
- <code><a href="./src/resources/forms.ts">FormRetrieveResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormUpdateResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormListResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormDeleteResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormListSubmissionsResponse</a></code>

Methods:

- <code title="get /forms/{formId}">client.forms.<a href="./src/resources/forms.ts">retrieve</a>(formID) -> FormRetrieveResponse</code>
- <code title="put /forms/{formId}">client.forms.<a href="./src/resources/forms.ts">update</a>(formID, { ...params }) -> FormUpdateResponse</code>
- <code title="get /forms">client.forms.<a href="./src/resources/forms.ts">list</a>({ ...params }) -> FormListResponse</code>
- <code title="delete /forms/{formId}">client.forms.<a href="./src/resources/forms.ts">delete</a>(formID) -> FormDeleteResponse</code>
- <code title="get /forms/{formId}/submissions">client.forms.<a href="./src/resources/forms.ts">listSubmissions</a>(formID, { ...params }) -> FormListSubmissionsResponse</code>

# KnowledgeBases

Types:

- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBase</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseRetrieveResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseUpdateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseListResponse</a></code>

Methods:

- <code title="get /knowledge-bases/{kbId}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">retrieve</a>(kbID) -> KnowledgeBaseRetrieveResponse</code>
- <code title="patch /knowledge-bases/{kbId}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">update</a>(kbID, { ...params }) -> KnowledgeBaseUpdateResponse</code>
- <code title="get /knowledge-bases">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">list</a>() -> KnowledgeBaseListResponse</code>
- <code title="delete /knowledge-bases/{kbId}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">delete</a>(kbID) -> void</code>

## Articles

Types:

- <code><a href="./src/resources/knowledge-bases/articles.ts">KnowledgeBaseArticle</a></code>
- <code><a href="./src/resources/knowledge-bases/articles.ts">ArticleCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/articles.ts">ArticleListResponse</a></code>

Methods:

- <code title="post /knowledge-bases/{kbId}/articles">client.knowledgeBases.articles.<a href="./src/resources/knowledge-bases/articles.ts">create</a>(kbID, { ...params }) -> ArticleCreateResponse</code>
- <code title="get /knowledge-bases/{kbId}/articles">client.knowledgeBases.articles.<a href="./src/resources/knowledge-bases/articles.ts">list</a>(kbID, { ...params }) -> ArticleListResponse</code>

# Pages

Types:

- <code><a href="./src/resources/pages.ts">Page</a></code>
- <code><a href="./src/resources/pages.ts">PageRetrieveResponse</a></code>
- <code><a href="./src/resources/pages.ts">PageUpdateResponse</a></code>
- <code><a href="./src/resources/pages.ts">PageListResponse</a></code>
- <code><a href="./src/resources/pages.ts">PageDeleteResponse</a></code>

Methods:

- <code title="get /pages/{pageId}">client.pages.<a href="./src/resources/pages.ts">retrieve</a>(pageID) -> PageRetrieveResponse</code>
- <code title="put /pages/{pageId}">client.pages.<a href="./src/resources/pages.ts">update</a>(pageID, { ...params }) -> PageUpdateResponse</code>
- <code title="get /pages">client.pages.<a href="./src/resources/pages.ts">list</a>({ ...params }) -> PageListResponse</code>
- <code title="delete /pages/{pageId}">client.pages.<a href="./src/resources/pages.ts">delete</a>(pageID) -> PageDeleteResponse</code>
