// src/types/auth.ts
export type UserRole = 'NEUROLOGIST' | 'NURSE' | 'ADMIN';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  hospitalName: string;
  subscriptionStatus: 'FREE_TRIAL' | 'PRO' | 'ENTERPRISE';
}