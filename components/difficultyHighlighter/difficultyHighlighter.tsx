import React from 'react';
import clsx from 'clsx';
import styles from './difficultyHighlighter.module.css';

interface DifficultyHighlighterProps {
    difficulty: string;
    children: React.ReactNode;
}


export default function DifficultyHighlighter({ difficulty, children }: DifficultyHighlighterProps) {

    return (
        <div className={clsx(
        '!w-full !h-full !p-4 !text-left',
        difficulty.toLowerCase() === 'beginner' ? styles.beginner :
        difficulty.toLowerCase() === 'intermediate' ? styles.intermediate :
        difficulty.toLowerCase() === 'advanced' ? styles.advanced :
        'border-l-4 border-gray-500'
      )}>
            {children}
        </div>
    );
}