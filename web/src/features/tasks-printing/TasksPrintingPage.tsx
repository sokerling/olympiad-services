export function TasksPrintingPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Подготовка</p>
        <h1>Задачи и печать</h1>
        <p className="page-description">Условия, эталонные ответы и материалы для участников.</p>
      </section>
      <section className="content-panel empty-state">
        <span className="empty-mark" aria-hidden="true">02</span>
        <h2>Место для ваших задач</h2>
        <p>Здесь появятся редактор задач, публикация эталонов и печать бланков с QR-кодами и бонусами.</p>
      </section>
    </>
  );
}
