import { Link, useParams } from "react-router";
import { resourceBySlug, resources } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { NotFound } from "./NotFound.tsx";
import { useTitle } from "../useTitle.ts";

export function ResourceArticle() {
  const { slug } = useParams();
  const resource = resourceBySlug(slug);
  useTitle(resource?.title ?? "Not found");

  if (!resource) return <NotFound />;

  const index = resources.findIndex((item) => item.slug === resource.slug);
  const next = resources[(index + 1) % resources.length];

  return (
    <article className="page">
      <PageHeader kicker={`${resource.kind} · ${resource.date}`} title={resource.title} lede={resource.dek} />
      <div className="wrap">
        <div className="prose">
        {resource.blocks.map((block) => {
          if (block.kind === "h") return <h2 key={block.text}>{block.text}</h2>;
          if (block.kind === "quote") return <blockquote key={block.text}>{block.text}</blockquote>;
          return <p key={block.text}>{block.text}</p>;
        })}
        <p className="byline">Mercenary X</p>
        {next ? (
          <p className="page-next">
            <Link className="text-link" to={`/resources/${next.slug}`}>
              Next: {next.title}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        ) : null}
        <p className="page-next">
          <Link className="text-link" to="/resources">
            All resources
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
      </div>
    </article>
  );
}
