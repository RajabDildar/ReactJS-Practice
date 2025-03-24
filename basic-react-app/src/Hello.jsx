export default function Hello({ userName, textColor }) {
  return (
    <div style={{ color: textColor }}>
      <p>Hello {userName}!</p>
    </div>
  );
}
