import {
  componentToModal,
  componentToDialog
} from './renderUtils'

export const ComponentToModal = componentToModal
export const ComponentToDialog = componentToDialog

const castPath = (path, object) => {
  let result = []
  if (path && object && typeof object === 'object') {
    result = path.split('.') || []
  }
  return result
}

const get = (object, path) => {
  path = castPath(path, object)

  var index = 0,
    length = path.length

  while (object && index < length) {
    object = object[path[index++]]
  }
  return (index && index === length) ? object : undefined
}

export default {
  get
}