import type { ServiceStatus } from './services';

const labels = {
  loading: 'Проверяем',
  online: 'Подключён',
  offline: 'Недоступен',
};

export function StatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <span className={`status-badge status-${status}`}>
      <span className="status-dot" aria-hidden="true" />
      {labels[status]}
    </span>
  );
}
