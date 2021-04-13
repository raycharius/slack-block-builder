import { paramMap } from '../constants';

interface AnyObject {
  [key: string]: any;
}

export class SlackDto {
  constructor(params: AnyObject) {
    this.mapParams(params);
  }

  private mapParams(params: AnyObject): void {
    Object.keys(params).forEach((paramName) => {
      const mappedParam = paramMap[paramName];

      if (params[paramName] !== undefined && mappedParam !== undefined) {
        this[mappedParam] = params[paramName];
      }
    });
  }
}
