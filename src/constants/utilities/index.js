const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}

export const createAsyncTypes = (typeString) =>
  (Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`
    return acc
  }, {}))

export const createAction =
  (type, payload = {}) =>
    ({ type, ...payload })

///////////////////
// createReducer //
///////////////////
export const createReducer =
  (initialState, handlers) =>
    ((state = initialState, action) =>
      handlers.hasOwnProperty(action.type)
        ? handlers[action.type](state, action)
        : state)

export const getTimeLineData = (currentTime, fullMapData) => {
  let timeLineData = {}
  Object.keys(fullMapData).forEach((key1) => {
    let _maps = fullMapData[key1].maps || {}
    Object.keys(_maps).forEach((key2) => {
      if (_maps[key2].minTime <= currentTime && _maps[key2].maxTime >= currentTime) {
        if (!timeLineData[key1]) {
          timeLineData[key1] = {}
        }
        if (!timeLineData[key1].maps) {
          timeLineData[key1].maps = {}
        }
        timeLineData[key1].maps[key2] = _maps[key2]
      }
    })
  })
  return timeLineData
}