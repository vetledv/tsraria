import { type NavigateOptions, type RegisteredRouter, useRouter } from "@tanstack/react-router"
import { RouterProvider } from "react-aria-components"

declare module "react-aria-components" {
	interface RouterConfig<TTo extends string = NonNullable<NavigateOptions["to"]>> {
		href: TTo
		routerOptions: Omit<NavigateOptions<RegisteredRouter, string, TTo, "", "">, "to">
	}
}

export function AriaRouterProvider({ children }: { children: React.ReactNode }) {
	let router = useRouter()
	return (
		<RouterProvider
			navigate={(to, options) => router.navigate({ to, ...options })}
			useHref={(to) => router.buildLocation({ to }).href}
		>
			{children}
		</RouterProvider>
	)
}
