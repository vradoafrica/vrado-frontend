// features/auth/services/api.ts
import { fetcher } from '@/lib/fetcher'; // your generic fetch wrapper

// Send OTP to email
export async function signInWithEmail(email: string){
  return fetcher('http://localhost:3003/api/v1/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

// Verify OTP during login
export async function verifyOtp(email: string, otp: string){
  return fetcher('http://localhost:3003/api/v1/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ email, otp }),
  });
}
