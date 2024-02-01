export abstract class BaseModel {
  properties: string[] = [];
  // requiredProperties: string[] = [];

  static create(data: unknown): unknown {
    return;
  }

  toObject(): unknown {
    return;
  }
}
