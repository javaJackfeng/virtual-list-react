import React from "react"
import ReactDom from 'react-dom/client'
import List from "./components/List"

const App = () => {
    return <List />
}

const root = (ReactDom as any).createRoot(document.getElementById('root'));
root.render(<App />);
