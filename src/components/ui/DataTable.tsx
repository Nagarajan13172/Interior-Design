import type { ProcessTableRow } from '../../types'

interface DataTableProps {
  headers: string[]
  rows: ProcessTableRow[]
  /** Highlight the first column as a row label (bolder). */
  labelFirstColumn?: boolean
}

/**
 * Responsive data table. Scrolls horizontally inside its own container on
 * small screens so the page itself never scrolls sideways.
 */
export default function DataTable({
  headers,
  rows,
  labelFirstColumn = true,
}: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-card">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="bg-dark-gradient text-white">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-5 py-4 text-sm font-semibold uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-black/5 transition-colors hover:bg-brandGold/5 ${
                i % 2 === 0 ? 'bg-white' : 'bg-brandLight'
              }`}
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-4 align-top text-sm leading-relaxed ${
                    labelFirstColumn && j === 0
                      ? 'font-semibold text-brandCharcoal'
                      : 'text-brandGray'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
