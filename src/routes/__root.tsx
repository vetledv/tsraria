import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components"
import { AriaRouterProvider } from "../components.tsx/aria-router-provider"

function getErrorMessage(error: unknown) {
	if (typeof error === "string") return error
	if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
		return error.message
	}
	console.error("Unable to get error message for error", error)
	return "Unknown Error"
}

export const Route = createRootRoute({
	component: RootRoute,
	errorComponent: (props) => {
		let error_message = getErrorMessage(props.error)
		return (
			<div className="flex flex-col gap-2 p-4">
				<h1 className="text-2xl">An error occured!</h1>
				<div className="p-2 bg-red-300">
					<p>{error_message}</p>
				</div>
				<Button className="p-2 w-fit bg-zinc-200 rounded-md hover:bg-zinc-300" onPress={() => props.reset()}>
					Reset
				</Button>
			</div>
		)
	},
})

function RootRoute() {
	return (
		<AriaRouterProvider>
			<div className="antialiased">
				<div className="p-2 flex gap-2 items-center">
					<MenuTrigger>
						<Button className="rounded-md px-3 py-1 bg-pink-200 hover:bg-pink-300 border border-zinc-300">
							Aria Navigation
						</Button>
						<Popover>
							<Menu className="p-2 bg-pink-100 flex flex-col">
								<MenuItem href="/" routerOptions={{ search: () => ({ asd: 1 }) }}>
									Home
								</MenuItem>
								<MenuItem href="/about">About</MenuItem>
								<MenuItem
									href="/posts/$slug"
									routerOptions={{ params: { slug: Math.floor(Math.random() * 100) } }}
								>
									Slug
								</MenuItem>
							</Menu>
						</Popover>
					</MenuTrigger>
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>
					<Link to="/about" className="[&.active]:font-bold">
						About
					</Link>
				</div>
				<hr />
				<Outlet />
			</div>
		</AriaRouterProvider>
	)
}
