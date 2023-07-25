import { Link } from "react-router-dom";

export const NavBar = () => {
  const NavElement = [
    { title: "Home", to: "/" },
    { title: "About ", to: "/about" },
    { title: "Service", to: "/service" },
    { title: "Users", to: "/users" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid red",
        }}
      >
        {NavElement.map((e, i) => (
          //   <a key={ialignItems: 'center',} href={e.to}>
          //     {e.title}
          //   </a>
          // key is used here to avoid re-rendering,it will help to do things again and again,like sorting, searching etc,,,

          <Link
            style={{
              margin: "10px",
              textDecoration: "none",
            }}
            key={i}
            to={e.to}
          >
            {e.title}
          </Link>
        ))}
      </div>
    </>
  );
};
