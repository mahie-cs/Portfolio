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
          background: '#0d1117',
          color: '#f3f5f8',
        }}
      >
        <div style={{ fontSize: 28, color: '#8fb4ff' }}>{siteConfig.role}</div>
        <div style={{ fontSize: 150, fontWeight: 700, letterSpacing: -6, lineHeight: 0.9, display: 'flex', flexDirection: 'column' }}>
          <span>{siteConfig.firstName}</span>
          <span>{siteConfig.lastName}</span>
        </div>
        <div style={{ fontSize: 30, color: '#9aa4b2' }}>{siteConfig.tagline}</div>
      </div>
    ),
    size
  );
}
