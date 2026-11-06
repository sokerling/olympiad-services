const roles = [
  ['Админ', 'Управление пользователями и полный доступ к функциям платформы.'],
  ['Составитель', 'Подготовка задач, эталонных ответов и материалов для печати.'],
  ['Представитель', 'Фотографирование, отправка бланков и просмотр своих отправок.'],
  ['Жюри', 'Доступ к опубликованным эталонам для проверки ответов.'],
  ['Ученик', 'Участник турнира без доступа к служебным операциям.'],
];

export function AccessPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Оргкомитет</p>
        <h1>Доступ и роли</h1>
        <p className="page-description">Пользователи и полномочия участников турнира.</p>
      </section>
      <section className="content-panel">
        <div className="panel-heading">
          <h2>Роли пользователей</h2>
          <span className="subtle-label">5 ролей</span>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th scope="col">Роль</th><th scope="col">Назначение</th></tr></thead>
            <tbody>
              {roles.map(([role, description]) => (
                <tr key={role}><th scope="row">{role}</th><td>{description}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <p className="section-note">Вход, пользователи и назначение ролей будут добавлены на следующем этапе.</p>
    </>
  );
}
