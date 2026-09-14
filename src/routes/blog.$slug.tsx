import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { SiteShell } from "@/components/site-shell";
import { POSTS } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: () => toHome("top"),
  component: PostPage,
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title ?? "Article"} | Canal Street Family Dentistry` },
        { name: "description", content: post?.excerpt ?? "" },
        { name: "robots", content: "noindex" },
      ],
    };
  },
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw notFound();
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <SiteShell active="Blog">
      <PageBanner title={post.title} crumbs={[{ name: "Blog", href: "/blog" }, { name: post.title }]} />
      <section className="bg-paper py-16">
        <article className="mx-auto max-w-3xl px-4">
          <img src={post.image} alt="" className="w-full rounded-card object-cover" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary">
            {post.date} · {post.category}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">{post.title}</h2>
          <p className="mt-5 text-muted">{post.body}</p>
        </article>
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="border border-line">
              <img src={p.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display font-semibold text-navy">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
