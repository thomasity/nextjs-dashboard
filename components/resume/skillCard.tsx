import React from 'react';
import { Skill} from '@/app/types';


export default function SkillCard({ info } : { info : Skill}) {


    return (
        <div className='items-start border-b theme-border last:border-b-0 py-4'>
            <div className='p-0 m-0 mb-2 flex-row justify-between'>
                <h4 className='m-0 p-0 text-lg'>
                    {info.title}:
                </h4>
            </div>
            {info.items.length === 0 ? (
                null
            ) : (
            <div className='p-0 m-0 items-start'>
                <ul className='flex flex-wrap p-0 m-0 gap-2'>
                    {(info.items).map((detail, index) => (
                        <li key={`${info.title}-${index}`}>
                            <p className="rounded-full bg-[var(--bg-active)] py-1 px-4 !text-sm">{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>

            )}
        </div>
    );
}