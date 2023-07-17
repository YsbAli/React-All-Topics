// import { useState } from "react";

// export const TodosInput = ({ DataFn }) => {
//   const [text, setText] = useState();
//   //   DataFn(text)
//   return (
//     <>
//       <div>
//         <input
//           onChange={(e) => setText(e.target.value)}
//           type="text"
//           placeholder="Type Todos here...."
//         />
//         <button
//           onClick={() => {
//             DataFn(text);
//           }}
//         >
//           Add Todos
//         </button>
//       </div>
//     </>
//   );
// };



// For Practice




import { useState } from "react";

export default function TodoInput({ todo }) {
  const [todoItem, setTodoItem] = useState("");
  // todo(todoItem)
  return (
    <>
      <div>
        <h5>{todoItem}</h5>
        <input
          onChange={(e) => setTodoItem(e.target.value)}
          type="text"
          placeholder="Type Todo"
        />
        <button onClick={() => todo(todoItem)}>ADD Todo</button>
      </div>
    </>
  );
}
