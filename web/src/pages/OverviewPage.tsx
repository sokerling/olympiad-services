import { Link } from 'react-router-dom';
import { services, type ServiceStatuses } from '../shared/services';
import { StatusBadge } from '../shared/StatusBadge';

export function OverviewPage({ statuses }: { statuses: ServiceStatuses }) {
  return (
    <>
      <section className="page-heading overview-heading">
        <div>
          <p className="eyebrow">От подготовки до приёма ответов</p>
          <h1>Всё для работы<br />с математическими играми</h1>
          <p className="page-description">Задачи и бланки, работа представителей и доступ участников — в одном пространстве.</p>
        </div>
        <div className="overview-note">
          <span className="note-number">3</span>
          <span>сервиса<br />одна платформа</span>
        </div>
      </section>

      <div className="section-heading">
        <h2>Разделы платформы</h2>
        <span>Выберите направление работы</span>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <Link className="service-card" to={service.path} key={service.id}>
            <div className="card-topline">
              <span className="card-number">{service.number}</span>
              <StatusBadge status={statuses[service.id]} />
            </div>
            <p className="eyebrow">{service.label}</p>
            <h3>{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <span className="card-link">Открыть раздел <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>

      <section className="workflow-panel">
        <div>
          <p className="eyebrow">Порядок работы</p>
          <h2>От задачи к принятому бланку</h2>
        </div>
        <ol className="workflow-steps">
          <li><span>01</span>Назначить роли</li>
          <li><span>02</span>Подготовить материалы</li>
          <li><span>03</span>Принять ответы</li>
        </ol>
      </section>
    </>
  );
}
