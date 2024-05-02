import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
	component: AboutPage,
})

function AboutPage() {
	return (
		<main>
			<h1>About</h1>
		</main>
	)
}
