/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.location.href = 'https://cybersparkn-max.github.io/API-excess-//';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 font-sans text-gray-900">
      <div className="text-center">
        <h1 className="text-xl font-medium mb-2">Redirecting...</h1>
        <p className="text-sm text-gray-500">
          If you are not redirected automatically,{' '}
          <a
            href="https://cybersparkn-max.github.io/API-excess-//"
            className="text-blue-600 hover:underline"
            target="_top"
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
