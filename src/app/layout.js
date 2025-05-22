'use client';

import { AuthProvider } from '@/context/AuthContext';
import SidebarLayout from '@/components/SidebarLayout';
import { ToastProvider } from '@/components/ui/Toast/ToastProvider';
import { Modal } from '@/components/ui/Modal/Modal';
import './globals.css';
 function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>
            <SidebarLayout>
             <div className="layout-container">
                {children}
             
             </div>
            </SidebarLayout>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    
      <RootLayout>
        {children}
      </RootLayout>
    
  );
}


export default Layout;
  