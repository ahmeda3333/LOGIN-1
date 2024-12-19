import React, { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { AuthMethodSelector } from '../components/auth/AuthMethodSelector';
import { PhoneInput } from '../components/auth/PhoneInput';
import { WalletOptions } from '../components/auth/WalletOptions';
import { SocialLogin } from '../components/auth/SocialLogin';
import { validateEmail, validatePassword, validatePhone, validateName } from '../utils/validation';

export function Register() {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone' | 'wallet'>('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
        error = validateName(value) || '';
        break;
      case 'email':
        error = validateEmail(value) || '';
        break;
      case 'phone':
        error = validatePhone(value) || '';
        break;
      case 'password':
        error = validatePassword(value) || '';
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
        }
        break;
      case 'confirmPassword':
        error = value !== formData.password ? 'Passwords do not match' : '';
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate all fields
    Object.keys(formData).forEach(field => 
      validateField(field, formData[field as keyof typeof formData])
    );

    // Check for errors
    const hasErrors = Object.values(errors).some(error => error);
    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join our platform securely"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthMethodSelector selected={authMethod} onChange={setAuthMethod} />

        {authMethod === 'email' && (
          <>
            <Input
              label="Full Name"
              icon={<User className="w-5 h-5" />}
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />
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
            <Input
              label="Confirm Password"
              type="password"
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
            />
            <Button 
              fullWidth 
              size="lg"
              isLoading={isLoading}
            >
              Create Account
            </Button>
          </>
        )}

        {authMethod === 'phone' && (
          <>
            <Input
              label="Full Name"
              icon={<User className="w-5 h-5" />}
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />
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
            <Input
              label="Confirm Password"
              type="password"
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
            />
            <Button 
              fullWidth 
              size="lg"
              isLoading={isLoading}
            >
              Create Account
            </Button>
          </>
        )}

        {authMethod === 'wallet' && <WalletOptions />}

        {authMethod !== 'wallet' && <SocialLogin />}

        <div className="text-center text-zinc-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:text-blue-300">
            Sign in
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}