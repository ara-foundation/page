import React from "react";
import Badge from "@/components/badge/Badge";
import Tooltip from "@/components/custom-ui/Tooltip";

type TermProps = {
  href: string;
  label: string;
  tooltip: string;
};

function Term({ href, label, tooltip }: TermProps) {
  const body = (
    <div className="max-w-sm space-y-2 text-sm leading-snug">
      <p>{tooltip}</p>
      <p className="underline">
        Visit the link to view more.
      </p>
    </div>
  );

  return (
    <div className="inline-flex items-baseline gap-0.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit underline underline-offset-2 decoration-neutral-400 transition-opacity hover:opacity-90 dark:decoration-neutral-500"
      >
        {label}
      </a>
      <Tooltip content={body} openDelay={100} tooltipClassName="text-sm">
        <span
          className="inline-flex translate-y-px cursor-help select-none"
          tabIndex={0}
          aria-label={`Short definition of ${label}`}
        >
          <Badge variant="info" static className="px-1 py-0 text-[0.65rem] leading-none">
            ?
          </Badge>
        </span>
      </Tooltip>
    </div>
  );
}

const TERMS: TermProps[] = [
  {
    href: "https://en.wikipedia.org/wiki/Blockchain",
    label: "blockchain",
    tooltip:
      "Decentralized deterministic state machine, others call it decentralized public ledger.",
  },
  {
    href: "https://www.inkandswitch.com/essay/malleable-software/",
    label: "malleable software",
    tooltip:
      "Tools that users can reshape with minimal friction to suit their unique needs. Modification becomes routine, not exceptional.",
  },
  {
    href: "https://en.wikipedia.org/wiki/Semantic_Web",
    label: "semantic web",
    tooltip: "Make internet data machine readable.",
  },
  {
    href: "https://en.wikipedia.org/wiki/Open-source_software",
    label: "open-source software",
    tooltip:
      "Software released under license and copyright distributing with source code.",
  },
];

export default function WhatIsAraIntersectionTerms() {
  return (
    <>
      {TERMS.map((t, i) => (
        <React.Fragment key={t.href}>
          {i > 0 && (i === TERMS.length - 1 ? " and " : ", ")}
          <Term {...t} />
        </React.Fragment>
      ))}
    </>
  );
}
