import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import ImageBackgroundContainer from '@/components/ImageBackgroundContainer'

export default function Home() {
  const headerText = "From Pixels to Portability:\nGame and Mobile"
  return (
    <>
      <ImageBackgroundContainer imageUrl="images/background.jpg">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-8">
          <div className="w-full sm:w-1/2">
              {/* Optional content for the first column if needed */}
          </div>
          <div className="w-full sm:w-1/2 px-4">
              <AnimatedText text="Mobile Apps. Web Apps. Limitless Potential." />
              <motion.div
                  className="px-4 sm:px-14"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                  <p className="inline-block w-full text-[#f0f8ff] font-light text-sm sm:text-base text-center sm:text-right">
                      With unwavering dedication, I transform innovative ideas into <br />cutting-edge web and mobile applications.
                  </p>
              </motion.div>
              <div className="py-16 sm:py-24"></div>
          </div>
        </div>
      </ImageBackgroundContainer>
    </>
  )
}
