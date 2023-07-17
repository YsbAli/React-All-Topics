export const BallCount = () => {
  const Ball_count = 50;

  return (
    <>
      <div>
        <h1>
          Currnet Over : {`${Math.floor(Ball_count / 6)}.${Ball_count % 6}`}
        </h1>
      </div>
    </>
  );
};
