import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthAgent from './agents/auth-agent';
import DashBoardLayout from './components/dashboard-layout/dashboard-layout';
import NoMobileSupport from './components/no-mobile-support/no-mobile-support';
import HomePage from './pages/home-page/home-page';
import LoginPage from './pages/login-page/login-page';
import SignUpPage from './pages/sign-up-page/sign-up-page';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AuthAgent />

      <BrowserRouter>
        <NoMobileSupport>
          <Routes>
            <Route index element={<DashBoardRoutes />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </NoMobileSupport>
      </BrowserRouter>
    </RecoilRoot>
  );
};

const DashBoardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoardLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
