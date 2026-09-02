import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

const upsertMeta = (selector: string, createAttributes: Record<string, string>, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttributes).forEach(([name, value]) => {
      element?.setAttribute(name, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta("meta[name='description']", { name: "description" }, description);
    upsertMeta("meta[property='og:title']", { property: "og:title" }, title);
    upsertMeta("meta[property='og:description']", { property: "og:description" }, description);
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, title);
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description" }, description);
  }, [title, description]);

  return null;
}
