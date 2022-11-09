import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {NavBar} from './core/NavBar'

const TrackingPage = lazy(() => import('./pages/tracking/TrackingPage'));
const ReportsPage = lazy(() => import('./pages/reports/ReportsPage'));

const Spinner = () => <div>loading...</div>

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
        <Routes>
          <Route path="/tracking" element={
            <Suspense fallback={<Spinner />}>
              <TrackingPage />
            </Suspense>
          } />
          <Route path="/reports" element={
            <Suspense fallback={<Spinner />}>
              <ReportsPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Navigate to="/tracking" />
          } />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
