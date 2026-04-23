import { useState, type ReactNode } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { cn } from './utils';

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

type SortDirection = 'asc' | 'desc' | null;

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  className,
  onRowClick,
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? null : 'asc');
      if (sortDir === 'desc') setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey || !sortDir) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal == null || bVal == null) return 0;
    const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <div className={cn('w-full', className)}>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="bg-[#e8f0f8]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  className={cn(
                    'px-5 py-3.5 text-left text-xs font-medium text-[#3D2E7C] uppercase tracking-wider',
                    col.sortable && 'cursor-pointer select-none hover:bg-[#c8d7ea]',
                    col.className
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.header}
                    {col.sortable && (
                      <span className="text-[#4B42AD]">
                        {sortKey === col.key && sortDir === 'asc' ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : sortKey === col.key && sortDir === 'desc' ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronsUpDown className="w-3.5 h-3.5 opacity-40" />
                        )}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-5 py-12 text-center text-sm text-[#3B394E]">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  className={cn(
                    'bg-white hover:bg-gray-50/80 transition-colors',
                    onRowClick && 'cursor-pointer'
                  )}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={cn('px-5 py-4 text-sm text-[#252434]', col.className)}>
                      {col.render ? col.render(row) : String(row[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {sortedData.length === 0 ? (
          <div className="text-center py-12 text-sm text-[#3B394E]">{emptyMessage}</div>
        ) : (
          sortedData.map((row, idx) => (
            <div
              key={idx}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={cn(
                'bg-white rounded-xl border border-gray-100 p-4 space-y-2',
                onRowClick && 'cursor-pointer active:bg-gray-50'
              )}
            >
              {columns.map((col) => (
                <div key={col.key} className="flex justify-between items-start">
                  <span className="text-xs font-medium text-[#3B394E] uppercase tracking-wider">
                    {col.header}
                  </span>
                  <span className="text-sm text-[#252434] text-right">
                    {col.render ? col.render(row) : String(row[col.key] ?? '')}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
