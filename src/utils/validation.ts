export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return 'Phone number is required';
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  const errors = [];
  if (password.length < 8) errors.push('At least 8 characters');
  if (!/[A-Z]/.test(password)) errors.push('One uppercase letter');
  if (!/[a-z]/.test(password)) errors.push('One lowercase letter');
  if (!/[0-9]/.test(password)) errors.push('One number');
  return errors.length ? errors.join(' • ') : null;
};

export const validateName = (name: string): string | null => {
  if (!name) return 'Full name is required';
  if (name.length < 2) return 'Name is too short';
  if (!/^[a-zA-Z\s]*$/.test(name)) return 'Name can only contain letters';
  return null;
};