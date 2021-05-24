import { Slot } from 'qoq';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import { Options } from 'etag';

export class Etag extends Slot<Slot.Web> {
  constructor(options: Options = {}) {
    super();

    this.use(conditional()).use(etag(options));
  }
}
