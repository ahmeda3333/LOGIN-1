import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { AuthMethodSelector } from '../components/auth/AuthMethodSelector';
import { PhoneInput } from '../components/auth/PhoneInput';
import { WalletOptions } from '../components/auth/WalletOptions';
import { SocialLogin } from '../components/auth/SocialLogin';
import { validateEmail, validatePassword, validatePhone } from '../utils/validation';
import { useAuth } from '../hooks/useAuth';

export function Login() {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone' | 'wallet'>('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'email':
        error = validateEmail(value) || '';
        break;
      case 'phone':
        error = validatePhone(value) || '';
        break;
      case 'password':
        error = validatePassword(value) || '';
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate all fields
    const fieldsToValidate = authMethod === 'email' 
      ? ['email', 'password']
      : ['phone', 'password'];

    fieldsToValidate.forEach(field => 
      validateField(field, formData[field as keyof typeof formData])
    );

    // Check for errors
    const hasErrors = fieldsToValidate.some(field => errors[field as keyof typeof errors]);
    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      await login(formData);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Access your account securely"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthMethodSelector selected={authMethod} onChange={setAuthMethod} />

        {authMethod === 'email' && (
          <>
            <Input
              label="Email Address"
              type="email"
              icon={<Mail className="w-5 h-5" />}
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />
            <Input
              label="Password"
              type="password"
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={errors.password}
            />
            <Button 
              fullWidth 
              size="lg"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </>
        )}

        {authMethod === 'phone' && (
          <>
            <PhoneInput
              value={formData.phone}
              onChange={(value) => handleChange('phone', value)}
              error={errors.phone}
            />
            <Input
              label="Password"
              type="password"
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={errors.password}
            />
            <Button 
              fullWidth 
              size="lg"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </>
        )}

        {authMethod === 'wallet' && <WalletOptions />}

        {authMethod !== 'wallet' && (
          <>
            <SocialLogin />
            <div className="text-center mt-4">
              <a href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                Forgot your password?
              </a>
            </div>
          </>
        )}

        <div className="text-center text-zinc-400">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-400 hover:text-blue-300">
            Sign up
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}