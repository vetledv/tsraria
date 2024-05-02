import { Link, Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
	component: RootRoute,
})

function RootRoute() {
	return (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
				<Link to="/about" className="[&.active]:font-bold">
					About
				</Link>
			</div>
			<hr />
			<Outlet />
		</>
	)
}
