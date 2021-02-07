# Etag
ETag support for qoq based on [koa-etag](https://github.com/koajs/etag) and [koa-conditional-get](https://github.com/koajs/conditional-get)

# Installation

```bash
yarn add qoq-etag
```

# Usage
```typescript
import { WebSlotManager } from 'qoq';
import { Etag } from 'qoq-etag';

export webSlots = WebSlotManager.use(new Etag());
```
