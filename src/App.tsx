import React, { Suspense } from 'react';
import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';
import YuiRoutes from './router';

export default function App() {
  return (
    <div>
      <AppHeader />

      <Suspense fallback={<div>Loading...</div>}>
        <YuiRoutes />
      </Suspense>

      <AppFooter />
    </div>
  );
}
