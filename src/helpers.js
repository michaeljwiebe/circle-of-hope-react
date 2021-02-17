export const getTrueFilters = (filters) => {
  let trueFilters = []
  let filterTypes = Object.keys(filters)
  console.log('filters', filters)
  filterTypes.map(type => {
    if (type !== 'options') {
      Object.keys(filters[type]).map(filter => {
        if (filters[type][filter]) trueFilters.push(filter)
      })
    }
  })
  return { trueFilters }
}