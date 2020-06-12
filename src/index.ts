import { Plugin } from 'fomex';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';

export interface EtagOptions {
  weak?: boolean;
}

export class PluginEtag extends Plugin<Plugin.Web> {
  constructor(options: EtagOptions = {}) {
    super();

    this
      .use(conditional())
      .use(etag(options));
  }
}
