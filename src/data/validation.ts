export const validationMessages: Record<string, any> = {
  required: (): string => 'Please fill out this field',
  minlength: ({ requiredLength }: { requiredLength: string | number }): string => `The min number of characters is ${requiredLength}`,
  maxlength: ({ requiredLength }: { requiredLength: string | number }): string => `The max allowed number of characters is ${requiredLength}`,
  minElementsCount: ({ requiredCount, fieldLabel }: { requiredCount: string | number; fieldLabel: string }): string =>
    `Minimum ${requiredCount} ${fieldLabel} are required`,
  maxElementsCount: ({ requiredCount, fieldLabel }: { requiredCount: string | number; fieldLabel: string }): string =>
    `Maximum ${requiredCount} ${fieldLabel} are required`,
  pattern: ({ requiredPattern }: { requiredPattern: string }): string => `The required pattern is: ${requiredPattern}`,
  email: (): string => 'Email seems to be invalid',
  url: (): string => 'Please enter a valid URL',
  appImageFile: (): string => 'Please provide valid png/jpg/jpeg/gif image file',
  appExpiredDate: (): string => 'Please fill valid current or future date',
  whiteSpace: (): string => 'Please fill valid value',
  domain: (): string => 'Please enter a valid domain',
  confirmPassword: (): string => 'Confirm password does not match to your password',
  serverError: ({ message }: { message: string }): string => message,
  min: ({ min }: { min: string | number }): string => `The minimum possible value is ${min}`,
  max: ({ max }: { max: string | number }): string => `The maximum possible value is ${max}`,
  password: (): string => 'Password can have any symbols, digits, and be at least 8 symbols long, without whitespaces',
  customError: (message: string): string => message,
};

export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  password: /^(?=.\S*[\w\W0-9])(?=.\S*[\S])\S{8,}$/i,
};
