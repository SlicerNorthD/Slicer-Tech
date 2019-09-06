const Style = () => (
  <style jsx="true">
    {`
      body {
        margin: 0;
        font-family: Verdana, sans-serif;
      }
      nav {
        position: relative;
        background-color: #212529;
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        padding: 0.75rem 1rem;
        border-radius: 5px 5px 0px 0px;
      }
      nav h1 {
        margin: 0;
        font-size: 1.25rem;
      }
      nav ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      nav li {
        padding: 0px 5px;
      }
      nav a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
      }
      .active {
        color: white;
      }
    `}
  </style>
);

export default Style;
