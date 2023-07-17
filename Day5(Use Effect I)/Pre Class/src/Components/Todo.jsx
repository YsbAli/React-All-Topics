import React, { useState } from "react";

const Todo = () => {
  const [inputtext, setInputText] = useState("");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);                               //network request for page request

  //trigger a network request

  React.useEffect(() => {
    GetTodos();

    // now let separate the this function into GetTodos

    // setLoading(true);
    // // fetch("https://json-server-mocker-masai.herokuapp.com/task")
    // fetch("https://fakestoreapi.com/products/1")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setData([res]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsError(true);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [page]);

  //Network request  function

  const GetTodos = () => {
    setLoading(true);
    // fetch(`https://json-server-mocker-masai.herokuapp.com/task?_page=${page}&_limit=2`)
    return fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData([res]);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const AddTodos = (title) => {
    const payload = {
      title,
      status: false,
    };

    setLoading(true);
    // fetch("https://json-server-mocker-masai.herokuapp.com/task")
    return fetch("https://fakestoreapi.com/products/1", {
      //making post request here

      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setData([res]);

        return GetTodos(); // we can do multiple things here
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //if loading show "..loading" ,,,,,, if Error, show "Something went wrong" otherwise show the data or div
  return loading ? (
    <div> ...loading</div>
  ) : isError ? (
    <div>Something went Wrong</div>
  ) : (
    <>
      <div>
        <div>
          <div>
            <input
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Type Todo"
            />
            <button onClick={() => AddTodos(inputtext)}>Add</button>
          </div>
        </div>

        {/* Data will show here */}
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{`${item.category} - ${item.price}`}</li>;
          })}
        </ul>
        <h1>Page : {page}</h1>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={page === 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export { Todo };
