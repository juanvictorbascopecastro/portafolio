export interface ErrorResponse {
  message: string | null;
  errors?: {
    [key: string]: string[];
  };
}
