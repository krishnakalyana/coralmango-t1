export default function Card({ children }) {
  return (
    <div className='w-full h-60 py-4 px-4 bg-white border border-gray-200 rounded-lg shadow'>
      {children}
    </div>
  )
}
