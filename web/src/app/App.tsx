import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { AccessPage } from '../features/access/AccessPage';
import { TasksPrintingPage } from '../features/tasks-printing/TasksPrintingPage';
import { SubmissionsPage } from '../features/submissions/SubmissionsPage';
import { OverviewPage } from '../pages/OverviewPage';
import { services } from '../shared/services';
import { useServiceStatuses } from '../shared/useServiceStatuses';

export function App() {
  const { statuses, refresh } = useServiceStatuses();
  const loading = Object.values(statuses).includes('loading');

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Математические игры — главная">
            <span className="brand-mark" aria-hidden="true">М</span>
            <span>Математические игры<span className="brand-caption">Платформа турниров</span></span>
          </Link>
          <span className="header-label">Рабочее пространство</span>
        </div>
        <nav className="navigation" aria-label="Основная навигация">
          <NavLink to="/" end>Обзор</NavLink>
          <NavLink to="/tasks">Задачи и печать</NavLink>
          <NavLink to="/submissions">Приём бланков</NavLink>
          <NavLink to="/access">Доступ и роли</NavLink>
        </nav>
      </header>

      <main id="main-content">
        <Routes>
          <Route path="/" element={<OverviewPage statuses={statuses} />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/tasks" element={<TasksPrintingPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="*" element={
            <section className="page-heading">
              <p className="eyebrow">Страница не найдена</p>
              <h1>Такого раздела нет</h1>
              <Link className="text-link" to="/">Вернуться к обзору</Link>
            </section>
          } />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>Математические игры</span>
        <div className="connection-summary" aria-live="polite">
          <span>Сервисы: {services.filter(({ id }) => statuses[id] === 'online').length} из 3 подключены</span>
          <button type="button" onClick={() => void refresh()} disabled={loading}>
            {loading ? 'Проверяем…' : 'Обновить статус'}
          </button>
        </div>
      </footer>
    </div>
  );
}
