function MessageBox({ message }) {
  return (
    <div className="grow flex justify-center items-center text-xl text-center font-semibold">
      <p>{message}</p>
    </div>
  );
}

export default MessageBox;
