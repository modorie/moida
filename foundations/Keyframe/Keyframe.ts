import { keyframes } from 'styled-components'

import type { KeyframeType } from './Keyframe.types'

const Keyframe: KeyframeType = {
  slideInLeft: keyframes`
    0% { 
      opacity: 0; 
      transform: translate(300px, 0); 
    }
  `,
  slideInUp: keyframes`
    0% { 
      opacity: 0; 
      transform: translate(0, 300px); 
    }
  `,
}

export default Keyframe
