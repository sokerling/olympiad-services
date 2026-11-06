export function SubmissionsPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Проведение</p>
        <h1>Приём бланков</h1>
        <p className="page-description">Отправка фотографий ответов и история работы с бланками.</p>
      </section>
      <section className="content-panel empty-state">
        <span className="empty-mark" aria-hidden="true">03</span>
        <h2>Место для ответов команд</h2>
        <p>Здесь появятся загрузка фото, распознавание QR-кодов, статусы отправок и исправление бланков.</p>
      </section>
    </>
  );
}
