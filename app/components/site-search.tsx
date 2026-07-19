"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconSearch, IconArrowRight } from "./icons";

export type SearchItem = {
  title: string;
  href: string;
  type: string;
  description: string;
};

export function SiteSearch({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <div>
      <div className="relative">
        <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <label htmlFor="site-search" className="sr-only">
          Search the site
        </label>
        <input
          id="site-search"
          type="search"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search solutions, industries, articles…"
          className="h-14 w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-strong outline-none transition focus:border-brand focus:ring-2 focus:ring-ring"
        />
      </div>

      <p className="mt-4 font-mono text-2xs uppercase tracking-wider text-muted">
        {results.length} result{results.length === 1 ? "" : "s"}
      </p>

      <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border">
        {results.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-4 bg-surface p-5 transition hover:bg-surface-sunken"
            >
              <span>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-2xs uppercase tracking-wider text-brand">
                    {item.type}
                  </span>
                  <span className="text-sm font-medium text-strong">
                    {item.title}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {item.description}
                </span>
              </span>
              <IconArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand" />
            </Link>
          </li>
        ))}
        {results.length === 0 ? (
          <li className="bg-surface p-6 text-sm text-muted">
            No matches. Try a different term.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
