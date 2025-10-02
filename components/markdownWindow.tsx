'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';


export default function MarkdownWindow({ owner, repo, className }: { owner: string, repo: string, className?: string }) {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [isPrivate, setIsPrivate] = useState<boolean>(true);

  useEffect(() => {
        const fetchPrivacy = async() => {
          try {
            const res = await fetch(`/api/github/${owner}/${repo}/visibility`);
            const data = await res.json();
            return (data["private"] as boolean);
          } catch (err) {
            console.error(err);
            return isPrivate;
          }
        };
        const fetchMarkdown = async () => {
          try {
            const res = await fetch(`/api/github/${owner}/${repo}/readme`);
            if (!res.ok) throw new Error('Markdown not found');
            const text = await res.text();
            setMarkdown(text);
          } catch (err) {
            console.error(err);
            setMarkdown('# Project not found');
          }
        };

        fetchPrivacy().then((privateResponse) => {
          if (privateResponse) {
            setIsPrivate(true);
            console.log("Private repo!")
            setMarkdown('# Private Repository.\n Request Permission to View.')
          } else {
            setIsPrivate(false);
            fetchMarkdown();
          }
        });
    }, []);

  return (
      <article className={clsx("!prose !dark:prose-invert overflow-scroll overscroll-contain p-6 space-y-2 m-0 bg-(--bg-hover) rounded-none", className)}>
        {markdown ? 
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </Markdown>
          : 
          <p>Loading…</p>}
      </article>
  );
}
