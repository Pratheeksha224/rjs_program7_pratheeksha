// TODO 1:
// Create a React element using React.createElement()
// Tag name: h1
// Text: Welcome to React

const element = React.createElement("h1",null,"Welcome to React");

// TODO 2:
// Create the React root

const root = ReactDOM.createRoot(document.getElementById("root"));

// TODO 3:
// Render the element

root.render(element);
