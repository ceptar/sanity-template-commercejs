import { Image } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
    // ... existing schema definition
  
    // New type definition for photos
    heroPhoto: {
      title: 'Hero Photo',
      name: 'heroPhoto', // Give it a clear name
      type: 'object',
      fields: [
        customImage({
          title: 'Background Photo (mobile)',
          name: 'mobilePhoto',
        }),
        customImage({
          title: 'Background Photo (desktop)',
          name: 'desktopPhoto',
        }),
      ],
    },
  };