export class UnexpectedError extends Error {
  constructor() {
    super('Something wrong happen, try again');
    this.name = 'UnexpectedError';
  }
}
