// features/auth/services/api.ts
import { fetcher } from '@/utils/fetcher'; // your generic fetch wrapper
// Send OTP to email
export async function signInWithEmail(email: string){
  return fetcher(' https://vrado-backend.onrender.com/api/v1/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

// Verify OTP during login
export async function verifyOtp(email: string, otp: string){
  return fetcher(' https://vrado-backend.onrender.com/api/v1/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ email, otp }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
}


export async function getUserDetails(token:string) {
 
  return fetcher(' https://vrado-backend.onrender.com/api/v1/users', {
    method: 'GET',
    headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  });
}

export async function getBusinessDetails(token:string) {
 
  return fetcher(' https://vrado-backend.onrender.com/api/v1/business', {
    method: 'GET',
    headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  });
}


export  async function createBusiness(data:object,token:any){
  try{
    return fetcher(" https://vrado-backend.onrender.com/api/v1/business",{
      body:JSON.stringify(data),
      method:"post",
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
  }catch(err){
    return err
  }
};