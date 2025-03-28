// components/BulkActions.jsx
export default function BulkActions({ onDeleteAll, onMarkAllDone }) {
  return (
    <div>
      <button className="delBtn" onClick={onDeleteAll}>
        Delete All
      </button>
      <button className="doneBtn" onClick={onMarkAllDone}>
        Done All
      </button>
    </div>
  );
}
