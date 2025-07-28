'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownWindow({ name }: { name: string }) {
  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {markdown;
        const res = await fetch(`/READMEs/${name}.md`);
        if (!res.ok) throw new Error('Markdown not found');
        const text = await res.text();
        setMarkdown(text);
      } catch (err) {
        setMarkdown('# Project not found');
      }
    };

    fetchMarkdown();
  }, );

  return (
      <article className='
        prose dark:prose-invert
        markdown-body
        h-full overflow-auto overscroll-contain
        p-6
        space-y-2
        m-0
        bg-[var(--dot-bg)]
        dark:bg-[var(--dot-bg)]
        rounded-none
      '>
        {markdown ? 
          <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </ReactMarkdown> 
          : 
          <p>Loading…</p>}
      </article>
  );
}
