'use client'
import ToggleSwitch from '@/app/_components/Switch'

export default function Header({
  handleViewSwitch,
  handleSearch,
  view,
  search
}) {
  return (
    <div className='flex justify-between items-center gap-4'>
      <h1 className='text-2xl mb-4'>Users </h1>
      <div className='flex gap-4'>
        {/* Toggle switch */}
        <div className='flex items-center '>
          <ToggleSwitch checked={view === 'card'} onChange={handleViewSwitch} />
          <span className='ml-2'>
            {view === 'table' ? 'Switch to Card View' : 'Switch to Table View'}
          </span>
        </div>
        {/* Search box */}
        <input
          type='text'
          placeholder='Search by name'
          className='border p-2 max-w-44 '
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}
