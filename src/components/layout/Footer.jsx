import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="py-6 text-center"
      style={{
        background: 'var(--bg)',
        borderTop: '0.5px solid var(--border)',
      }}
    >
      <div className="max-w-5xl px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          <span
            className="text-xs"
            style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}
          >
            herimamy<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </div>

        <p
          className="text-xs"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
        >
          © {new Date().getFullYear()} RA-FANOMEZANA Herimamy Fenohasina
          <span style={{ color: 'var(--accent)', marginLeft: 8 }}>·</span>
          <span style={{ marginLeft: 8 }}>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
