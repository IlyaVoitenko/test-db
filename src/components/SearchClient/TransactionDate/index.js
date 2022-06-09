const TransactionDate = ({ dateTransaction }) => {
  const { date, time } = dateTransaction;
  return (
    <td>
      {date.year}-{date.month}-{date.day} {time.hour}:{time.minute}:
      {time.second}
    </td>
  );
};
export default TransactionDate;
