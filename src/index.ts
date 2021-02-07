import { Slot } from 'qoq';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';

export interface EtagOptions {
  weak?: boolean;
}

export class Etag extends Slot<Slot.Web> {
  constructor(options: EtagOptions = {}) {
    super();

    this
      .use(conditional())
      .use(etag(options));
  }
}
