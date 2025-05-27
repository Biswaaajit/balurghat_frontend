function ErrorPage({ error }) {
  return (
    <div className="grow flex flex-col justify-center items-center">
      <h1>Something went wrong!!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;
