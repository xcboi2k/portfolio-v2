import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import ImageBackgroundContainer from '@/components/ImageBackgroundContainer'

export default function Home() {
  const headerText = "From Pixels to Portability:\nGame and Mobile"
  return (
    <>
      <ImageBackgroundContainer imageUrl='images/background.jpg'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
            </div>
            <div className='w-1/2 px-4'>
              <AnimatedText text='Game Dev. Mobile Apps. Limitless Potential.'/>
              <motion.div className='px-14'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="inline-block w-full text-[#f0f8ff] font-light text-sm text-right">
                With unwavering dedication, I transform innovative ideas into captivating games
                and cutting-edge mobile applications
                </p>
              </motion.div>
              <div className='py-24'></div>
            </div>
          </div>
        </ImageBackgroundContainer>
    </>
  )
}
