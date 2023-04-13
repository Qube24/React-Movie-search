import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <ul>
        <li>tekst</li>
        <li>tekst</li>
        <li>tekst</li>
      </ul>
      <Outlet />
    </div>
  );
}
