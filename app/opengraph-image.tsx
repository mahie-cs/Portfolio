import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#e5e5e5',
          color: '#111111',
          border: '12px solid #111111',
        }}
      >
        <div style={{ fontSize: 28, color: '#111111', fontWeight: 700 }}>{siteConfig.role}</div>
        <div style={{ fontSize: 150, fontWeight: 700, letterSpacing: -6, lineHeight: 0.9, display: 'flex', flexDirection: 'column' }}>
          <span style={{ background: '#ffd93d', border: '8px solid #111', borderRadius: 28, padding: '0 24px', width: 'fit-content', boxShadow: '12px 12px 0 #111' }}>{siteConfig.firstName}</span>
          <span style={{ background: '#ff8fab', border: '8px solid #111', borderRadius: 28, padding: '0 24px', width: 'fit-content', marginTop: 20, boxShadow: '12px 12px 0 #111' }}>{siteConfig.lastName}</span>
        </div>
        <div style={{ fontSize: 30, color: '#111111', fontWeight: 600 }}>{siteConfig.tagline}</div>
      </div>
    ),
    size
  );
}
