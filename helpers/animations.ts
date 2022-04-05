import { Variants } from "framer-motion";

export const marqueeEffectRight: Variants = {
    animate: (from, to) => ({
        x: [0, -1035],
        transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }, 
    })
}

export const marqueeEffectLeft: Variants = {
    animate: (from, to) => ({
        x: [-1035, 0],
        transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }, 
    })
}