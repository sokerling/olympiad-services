export const services = [
  {
    id: 'access',
    title: 'Доступ и роли',
    description: 'Пользователи и полномочия участников турнира.',
    path: '/access',
    label: 'Оргкомитет',
    number: '01',
  },
  {
    id: 'tasks-printing',
    title: 'Задачи и печать',
    description: 'Условия, эталонные ответы и печатные материалы.',
    path: '/tasks',
    label: 'Подготовка',
    number: '02',
  },
  {
    id: 'submissions',
    title: 'Приём бланков',
    description: 'Фотографии ответов, отправки и их история.',
    path: '/submissions',
    label: 'Проведение',
    number: '03',
  },
] as const;

export type ServiceId = (typeof services)[number]['id'];
export type ServiceStatus = 'loading' | 'online' | 'offline';
export type ServiceStatuses = Record<ServiceId, ServiceStatus>;
