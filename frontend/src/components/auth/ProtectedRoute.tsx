import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import type { UserRole } from '../../types/auth';

interface ProtectedRouteProps {
  isAuthenticated?: boolean;
  userRole?: UserRole;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated = true, // Default to true during frontend development
  userRole = 'NEUROLOGIST',
  allowedRoles,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};