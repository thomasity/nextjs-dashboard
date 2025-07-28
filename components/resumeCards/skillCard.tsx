import React from 'react';
import { Skill} from '@/app/types';


export default function SkillCard({ info } : { info : Skill}) {


    return (
        <div className='items-start border-b last:border-b-0'>
            <div className='p-0 m-0 mb-2 flex-row justify-between'>
                <h3>
                    {info.title}
                </h3>
            </div>
            <div className='p-0 m-0 flex-row justify-between'>
                <p>
                    {info.summary}
                </p>
            </div>
            {info.items === null ? (
                null
            ) : (
            <div className='p-0 m-0 mt-4 items-start'>
                <ul className='flex flex-wrap p-0 m-0 pl-5 gap-5'>
                    {(info.items).map((detail, index) => (
                        <li key={`${info.title}-${index}`}>
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>

            )}
        </div>
    );
}