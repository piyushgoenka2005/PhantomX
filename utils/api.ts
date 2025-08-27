import type { ApiResponse, AppError } from '@/types';
import { ERROR_MESSAGES } from '@/constants';

export class ApiError extends Error {
  public status: number;
  public code: string;

  constructor(message: string, status: number, code: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof ApiError) {
    return {
      code: error.code,
      message: error.message,
      details: { status: error.status }
    };
  }

  if (error instanceof Error) {
    return {
      code: 'UNKNOWN_ERROR',
      message: error.message
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: ERROR_MESSAGES.GENERIC
  };
};

export const apiRequest = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status,
        `HTTP_${response.status}`
      );
    }

    const data = await response.json();
    
    return {
      data,
      success: true
    };
  } catch (error) {
    const appError = handleApiError(error);
    
    return {
      data: null as T,
      success: false,
      error: appError.message,
      message: appError.message
    };
  }
};

export const postRequest = async <T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getRequest = async <T>(
  url: string
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, {
    method: 'GET',
  });
};

export const putRequest = async <T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const deleteRequest = async <T>(
  url: string
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, {
    method: 'DELETE',
  });
};
