import React from 'react'
import AddPost from '../../componets/AddPost/AddPost'
import ToggleColorMode from '../../componets/form/Toggler'
const index = () => {
  return (
    <ToggleColorMode>
       <AddPost/>
    </ToggleColorMode>
  )
}

export default index