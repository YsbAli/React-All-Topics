// SyntheticEvents :-  is an event that is created by react which is the same way across all the browser

//  Synthetic means  -> Man made

// browserEvent  = e.native event

// it's important in interview advanced topic

export const SyntheticEvents = () => {
  const Synthethic = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <button onClick={Synthethic}>Click</button>
      </div>
    </>
  );
};
