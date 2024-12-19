import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { validateEmail } from '../utils/validation';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent recovery instructions to your email"
      >
        <div className="space-y-6">
          <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <p className="text-zinc-300 text-center">
              If an account exists for <span className="text-white">{email}</span>,
              you will receive password reset instructions.
            </p>
          </div>

          <Button 
            variant="outline" 
            fullWidth
            size="lg"
            onClick={() => window.location.href = '/login'}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Button>

          <p className="text-center text-zinc-500 text-sm">
            Didn't receive the email? Check your spam folder or{' '}
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-blue-400 hover:text-blue-300"
            >
              try again
            </button>
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Reset Password" 
      subtitle="We'll send you instructions to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          icon={<Mail className="w-5 h-5" />}
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          error={error}
        />

        <Button 
          fullWidth 
          size="lg"
          isLoading={isLoading}
        >
          Send Recovery Link
        </Button>

        <div className="text-center text-zinc-400">
          Remember your password?{' '}
          <a href="/login" className="text-blue-400 hover:text-blue-300">
            Sign in
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}