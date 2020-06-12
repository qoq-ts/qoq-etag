# Fomex Etag
ETag support for fomex based on [koa-etag](https://github.com/koajs/etag) and [koa-conditional-get](https://github.com/koajs/conditional-get)

# Installation

```bash
yarn add fomex-etag
```

# Usage
```typescript
import { baseWebRouter } from 'fomex';
import { PluginEtag } from 'fomex-etag';

export webRouter = baseWebRouter.global(new PluginEtag());
```
