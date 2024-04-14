export default function TableView({ list, handleSort, sortOrder, sortKey }) {
  return (
    <div class='relative overflow-x-auto'>
      <table class='w-full text-sm text-left rtl:text-right text-gray-500 '>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50'>
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
            <th scope='col' class='px-6 py-3'>
              Occupation
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, index) => {
            let { name, age, occupation } = user
            return (
              <tr class='bg-white border-b ' key={index}>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                >
                  {name}
                </th>
                <td class='px-6 py-4'>{age}</td>
                <td class='px-6 py-4'>{occupation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
