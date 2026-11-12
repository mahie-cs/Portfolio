import { useSyncExternalStore } from 'react';

const noop = () => () => {};

/** false during SSR and hydration, true afterwards. Avoids hydration mismatches. */
export function useIsClient() {
  return useSyncExternalStore(noop, () => true, () => false);
}
