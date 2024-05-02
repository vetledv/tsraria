import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
	component: AboutPage,
})

function AboutPage() {
	return (
		<main className="p-4">
			<h1>About</h1>
		</main>
	)
}
