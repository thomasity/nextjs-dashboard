"use client";
import { useState } from "react";


export default function FilterTab({
  label,
  items,
  selected,
  onChange,
}: {
  label: string,
  items: any[];
  selected: (string | number)[];
  onChange: (val: (string | number)[]) => void;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleSelection = (label: string | number) => {
    console.log("Adding: ", label);
    const updated = selected.includes(label)
      ? selected.filter((l) => l !== label)
      : [...selected, label];
    onChange(updated);
    console.log("Updated: ", updated)
  };


  return (
    <div className="h-auto w-full m-0 p-2 border-b">
        <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer flex flex-row justify-between items-center p-0"
        >
          <p>{label}</p>
          <p className="text-sm">{expanded ? '▼' : '►'}</p>
        </div>
        {expanded &&
          <ul className="h-full max-h-[8rem] w-full list-none p-0 m-0 border overflow-auto">
            {items.map((item) => (
                <li
                key={item}
                className="border-b last:border-0"
                >
                  <button
                    className="w-full h-full p-1 m-0 flex flex-row justify-between items-center rounded-none border-0"
                    onClick={() => {
                      toggleSelection(item);
                    }
                    }
                  >
                    <p className="h-full p-1 text-xs">
                    {item}
                    </p>
                    <input
                      type="checkbox"
                      className="rounded-full bg-[var(--bg-color)] text-[#0969DA] dark:text-[#418DEE]"
                      checked={selected.includes(item)}
                      readOnly
                    />
                  </button>
                </li>
            ))}
          </ul>
        
        }
      </div>
  );
}
