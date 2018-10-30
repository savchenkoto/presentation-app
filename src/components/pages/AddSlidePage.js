import React from 'react'

const AddSlidePage = () => {
  return (
    <div>
      <form>
        <label>
          Position
          <input type='number' min={1}/>
        </label>
        <label>
          Image
          <input type="file" accept='image/*'/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddSlidePage
