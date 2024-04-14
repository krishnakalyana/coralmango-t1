import Card from '@/app/_components/Card'
import Image from 'next/image'

export default function CardView({ list }) {
  return (
    <div className='flex  flex-wrap'>
      {list.map((user, index) => {
        let { name, age, occupation } = user
        return (
          <div className=' w-full sm:w-2/4 md:w-1/3 p-4' key={index}>
            <Card>
              <div className='w-full flex flex-col justify-center items-center gap-4'>
                <Image
                  className='text-center rounded-sm '
                  alt='user image'
                  src={'/images/user.jpg'}
                  width={100}
                  height={100}
                />
                <div className='text-center'>
                  <h4>{name}</h4>
                  <h4>{occupation}</h4>
                  <h4>{age} years</h4>
                </div>
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
