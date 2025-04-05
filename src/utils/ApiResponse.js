class ApiResponse {
  constructor(satusCode, data, message = "Success") {
    this.statusCode = satusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
