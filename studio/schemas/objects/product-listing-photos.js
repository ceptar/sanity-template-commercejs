import { Stack } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
  title: 'Listing Photos',
  name: 'productListingPhotos',
  type: 'object',
  icon: Stack,
  fields: [
    // {
    //   title: 'Wich Variants is this for?',
    //   name: 'forOption',
    //   type: 'string',
    //   options: {
    //     list: [{ title: 'All', value: '' }],
    //     fromField: 'options',
    //     fromSubField: 'values',
    //     fromFieldData: {
    //       title: 'name',
    //       value: 'position'
    //     }
    //   }
    // },
    customImage({
      title: 'Thumbnail',
      name: 'listingPhoto'
    }),
    customImage({
      title: 'Thumbnail (hover)',
      name: 'listingPhotoHover'
    })
  ],
  preview: {
    select: {
      listingPhoto: 'listingPhoto'
      // forOption: 'forOption'
    },
    prepare({ listingPhoto }) {
      const option = null
      return {
        title:
          option && option.length > 1
            ? `${option[0]}: ${option[1]}`
            : 'All Variants',
        media: listingPhoto ? listingPhoto : null
      }
    }
  }
}
