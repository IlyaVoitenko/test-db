const InfoClient = ({ client }) => {
  console.log('client :', client);
  const {} = client;
  return (
    <div>
      <input type="tel" />
      <button>send</button>
    </div>
  );
};
export default InfoClient;
