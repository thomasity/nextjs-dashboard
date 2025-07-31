'use client';

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export default function MarkdownWindow({ name }: { name: string }) {
  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(`/READMEs/${name}.md`);
        if (!res.ok) throw new Error('Markdown not found');
        const text = await res.text();
        setMarkdown(text);
      } catch (err) {
        console.error(err);
        setMarkdown('# Project not found');
      }
    };

    fetchMarkdown();
  }, [name]);

  return (
      <article className='
        !prose !dark:prose-invert
        markdown-body
        h-full overflow-auto overscroll-contain
        p-6
        space-y-2
        m-0
        bg-(--dot-bg)
        dark:bg-(--dot-bg)
        rounded-none
      '>
        {markdown ? 
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </Markdown>
          : 
          <p>Loading…</p>}
      </article>
  );
}
