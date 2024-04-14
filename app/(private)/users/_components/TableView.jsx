export default function TableView({ list, handleSort, sortOrder, sortKey }) {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 cursor-pointer'
              onClick={() => handleSort('name')}
            >
              Name {sortKey === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th
              className='px-6 py-3 cursor-pointer'
              onClick={() => handleSort('age')}
            >
              Age {sortKey === 'age' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th scope='col' className='px-6 py-3'>
              Occupation
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, index) => {
            let { name, age, occupation } = user
            return (
              <tr className='bg-white border-b ' key={index}>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                >
                  {name}
                </th>
                <td className='px-6 py-4'>{age}</td>
                <td className='px-6 py-4'>{occupation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
