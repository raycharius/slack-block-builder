/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import type { ObjectLiteral } from '../types';

export interface MustBuild {
  /**
   * @description ⚠ ATTENTION: Not meant to be called outside of the source code of BlockBuilder Builder.
   */

  build(params?: ObjectLiteral): any;
}
