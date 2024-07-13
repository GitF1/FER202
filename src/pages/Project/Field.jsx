function Field({ fields = [] }) {
  return (
    <tr>
      {fields?.map((f) => (
        <th key={f}>{f}</th>
      ))}
    </tr>
  );
}

export default Field;
