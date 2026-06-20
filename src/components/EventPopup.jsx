export default function EventPopup({
  title,
  description,
  onClose
}) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>

        <p>{description}</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}