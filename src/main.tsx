import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

const root = document.getElementById("root")
if (!root) {
	throw new Error("No root element")
}
createRoot(root).render(
	<React.StrictMode>
		<p>123</p>
	</React.StrictMode>,
)
