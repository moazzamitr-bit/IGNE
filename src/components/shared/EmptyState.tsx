export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="empty-state" role="status">
      <span aria-hidden="true" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
