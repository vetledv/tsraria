import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$slug")({
	component: PostSlugPage,
	parseParams(rawParams) {
		return {
			slug: Number.parseInt(rawParams.slug),
		}
	},
})

function PostSlugPage() {
	let params = Route.useParams()
	return (
		<main className="p-4">
			<p>Post {params.slug}</p>
		</main>
	)
}
