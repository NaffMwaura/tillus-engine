// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from '../pages/Landing';
import { WorkflowPage } from '../pages/WorkflowPage';
import { ModulesPage } from '../pages/ModulesPage';
import { PricingPage } from '../pages/PricingPage';
import { DemoPage } from '../pages/DemoPage';
import { LoginPage } from '../pages/LoginPage';
import { DoctorDashboard } from '../pages/dashboards/DoctorDashboard';
import { NurseDashboard } from '../pages/dashboards/NurseDashboard';
import { ITAdminDashboard } from '../pages/dashboards/ITAdminDashboard';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Marketing Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/workflow" element={<WorkflowPage />} />
      <Route path="/modules" element={<ModulesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Role-Based Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Navigate to="/dashboard/doctor" replace />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/nurse" element={<NurseDashboard />} />
        <Route path="/dashboard/it" element={<ITAdminDashboard />} />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};