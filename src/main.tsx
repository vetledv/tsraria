import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { TSRProvider } from "./router"

const rootElement = document.getElementById("root")
if (!rootElement) {
	throw new Error("Root element missing")
}

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<React.StrictMode>
			<TSRProvider />
		</React.StrictMode>,
	)
}
