import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  homeHref?: string
  homeLabel?: string
  separator?: React.ReactNode
}

export function Breadcrumb({
  items,
  homeHref = "/",
  homeLabel = "Home",
  separator = <ChevronRight className="h-4 w-4 text-muted-foreground" />,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      className={cn("flex items-center text-sm text-muted-foreground", className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link
            href={homeHref}
            className="flex items-center hover:text-foreground transition-colors"
            aria-label={homeLabel}
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">{homeLabel}</span>
          </Link>
          <span className="mx-2 flex items-center">{separator}</span>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {!item.isCurrent ? (
              <>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span className="mx-2 flex items-center">{separator}</span>
                )}
              </>
            ) : (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
