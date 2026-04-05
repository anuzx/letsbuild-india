'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <div style={{
      width: '100%',
      padding: '1.2rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 50,
    }}>
      <nav style={{
        maxWidth: '48rem',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '1rem',
        padding: '0.85rem 1.75rem',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: '1.4rem',
              fontWeight: '800',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            HT
          </Link>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {['Hackathon', 'About Us', 'Contact Us'].map((label, i) => {
              const hrefs = ['/hackathon', '/about', '/contact'];
              return (
                <Link
                  key={label}
                  href={hrefs[i]}
                  style={{
                    padding: '0.5rem 1.1rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '0.6rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
