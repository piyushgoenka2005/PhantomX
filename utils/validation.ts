export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateField = (value: string, rules: ValidationRule): ValidationResult => {
  const errors: string[] = [];

  if (rules.required && !value.trim()) {
    errors.push('This field is required');
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    errors.push(`Minimum length is ${rules.minLength} characters`);
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    errors.push('Invalid format');
  }

  if (value && rules.custom && !rules.custom(value)) {
    errors.push('Invalid value');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validateField(email, {
    required: true,
    pattern: emailPattern
  });
};

export const validatePassword = (password: string): ValidationResult => {
  return validateField(password, {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  });
};

export const validateName = (name: string): ValidationResult => {
  return validateField(name, {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/
  });
};

export const validatePhone = (phone: string): ValidationResult => {
  const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
  return validateField(phone, {
    pattern: phonePattern
  });
};
