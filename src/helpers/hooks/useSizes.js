import { useEffect, useState } from 'react'

const createDefaultSizes = (obj) => {
  const result = {}
  for (const key in obj) {
    result[key] = { width: 0, height: 0 }
  }
  return result
}

export const useSizes = (options) => {
  const [sizes, setSizes] = useState(createDefaultSizes(options))

  useEffect(() => {
    const newSizes = {}
    let changed = false

    for (const key in sizes) {
      if (!options[key].current) return
      const { clientHeight, clientWidth } = options[key].current
      if (sizes[key].height !== clientHeight || sizes[key].width !== clientWidth) {
        newSizes[key] = { height: clientHeight, width: clientWidth }
        changed = true
      }
      else {
        newSizes[key] = sizes[key]
      }
    }

    if (changed) {
      setSizes(newSizes)
    }
  }, [options, sizes])

  return sizes
}
