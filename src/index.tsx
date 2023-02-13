import React from "react"
import ReactDom from 'react-dom/client'
import List from "./components/List"

const App = () => {
    return <div style={{ width: 200, height: 250, margin: "20px auto", background: "#e5e5e5" }}>
        <List />
    </div>
}

const root = (ReactDom as any).createRoot(document.getElementById('root'));
root.render(<App />);
