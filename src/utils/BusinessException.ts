export default class implements Exception {
  status: number;
  message: string;

  constructor(status: number, message = '') {
    this.status = status
    this.message = message
  }
}