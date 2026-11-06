import { useCallback, useEffect, useRef, useState } from 'react';
import { services, type ServiceStatuses } from './services';

const initialStatuses: ServiceStatuses = {
  access: 'loading',
  'tasks-printing': 'loading',
  submissions: 'loading',
};

export function useServiceStatuses() {
  const [statuses, setStatuses] = useState(initialStatuses);
  const activeRequest = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setStatuses({ ...initialStatuses });

    await Promise.all(
      services.map(async ({ id }) => {
        let status: 'online' | 'offline' = 'offline';
        try {
          const response = await fetch(`/api/${id}/health`, {
            signal: AbortSignal.any([controller.signal, AbortSignal.timeout(4000)]),
            cache: 'no-store',
          });
          status = response.ok ? 'online' : 'offline';
        } catch {
          status = 'offline';
        }
        if (!controller.signal.aborted) {
          setStatuses((current) => ({ ...current, [id]: status }));
        }
      }),
    );
  }, []);

  useEffect(() => {
    void refresh();
    return () => activeRequest.current?.abort();
  }, [refresh]);

  return { statuses, refresh };
}
