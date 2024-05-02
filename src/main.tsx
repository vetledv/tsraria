import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { TSRProvider } from "./router"

let rootElement = document.getElementById("root")

if (!rootElement) {
	throw new Error("Root element missing")
}

createRoot(rootElement).render(
	<React.StrictMode>
		<TSRProvider />
	</React.StrictMode>,
)
