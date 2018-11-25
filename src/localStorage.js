export const loadData = () => {
  try {
    const serialized = localStorage.getItem('state')
    return serialized ?
      JSON.parse(serialized) :
      undefined
  } catch (e) {
    return undefined
  }
}

export const saveData = (state) => {
  try {
    const serialized = JSON.stringify(state)
    localStorage.setItem('state', serialized)
  }
  catch (e) {
    console.error(e.message)
  }
}

