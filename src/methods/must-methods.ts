/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { BuildParams } from '../lib';

export interface MustBuild {
  /**
   * @description ⚠ ATTENTION: Not meant to be called outside of the source code of BlockBase Builder.
   */

  build(params?: BuildParams): any;
}
