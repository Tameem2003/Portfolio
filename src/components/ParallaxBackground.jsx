import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50});
    const mountain3Y = useTransform(x, [0,0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0,0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0,0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0,0.5], ["0%", "0%"]);

  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background Sky  */}
            <div className='absolute inset-0 w-full h-screen -z-50'
                style={{
                    backgroundImage: "url(/assets/sky.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }} />
            
             
             {/* Mountain Layer 3 */}

            <motion.div className='absolute inset-0 -z-40'
                style={{
                        y: mountain3Y,
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}/>

            {/* Planets layer  */}
            <motion.div className='absolute inset-0 -z-30'
                style={{
                        x: planetsX,
                        backgroundImage: "url(/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}/>

                    {/* Mountain layer 2  */}
            <motion.div className='absolute inset-0 -z-20'
                style={{
                        y:mountain2Y,
                        backgroundImage: "url(/assets/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}/>

                    {/* Mountain layer 1  */}
            <motion.div className='absolute inset-0 -z-10'
                style={{
                        y:mountain1Y,
                        backgroundImage: "url(/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}/>
        </div>
    </section>
  );
}

export default ParallaxBackground;
