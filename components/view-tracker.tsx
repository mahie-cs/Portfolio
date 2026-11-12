'use client';

import { useEffect } from 'react';
import { addView } from '@/app/actions/stats';

/** Counts one view per browser session (not per navigation or refresh). */
export function ViewTracker() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('viewed')) return;
      sessionStorage.setItem('viewed', '1');
    } catch {
      return;
    }
    void addView();
  }, []);
  return null;
}
