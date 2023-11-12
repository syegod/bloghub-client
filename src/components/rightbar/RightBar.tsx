import CustomBtn from '../inputs/CustomBtn'
import SearchInput from '../inputs/SearchInput'
import WhoToFollowItem from './WhoToFollowItem'

const RightBar = () => {
  return (
    <div className='hidden lg:block lg:w-1/3'>
      <div className='w-full py-3 px-5 flex flex-col gap-5'>
        <SearchInput />
        <div className='bg-gray-100 w-full p-2 flex flex-col gap-3 rounded-xl'>
          <span className='text-xl font-bold'>Subscribe to Premium</span>
          <span className='text-md font-semibold'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          <CustomBtn text='Subscribe' fullRounded />
        </div>
        <div className='bg-gray-100 w-full py-2 flex flex-col gap-3 rounded-xl'>
          <span className='font-bold text-xl px-2'>Who to follow</span>
          <div className='flex flex-col'>
            <WhoToFollowItem username='syegod' userAvatar='https://images4.alphacoders.com/133/1332281.jpeg' userEmail='syegod362@gmail.com'/>
            <WhoToFollowItem username='admin' userAvatar='https://i.pinimg.com/736x/92/c9/45/92c945aa128d8a3848230b785857512b.jpg' userEmail='admin@gmail.com'/>
            <WhoToFollowItem username='valeragladiko' userAvatar='https://avatanplus.com/files/resources/mid/580494a2a932a157d1e49b85.png' userEmail='valakas@gmail.com'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar