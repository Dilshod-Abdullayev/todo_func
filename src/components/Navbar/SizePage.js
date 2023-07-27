import React from 'react'
import '../../styles/style.css'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { sizeAction } from '../../redux/action/sizeAction';
export default function SizePage() {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.sizeReducer.size);
  const handleChangeSize = (sizeType) => {
    dispatch(sizeAction(sizeType));
  };
  return (
    <div className='sizePage'>
      <Button onClick={() => handleChangeSize("first")}>1x</Button>
      <Button onClick={() => handleChangeSize("second")}>2x</Button>
      <Button onClick={() => handleChangeSize("third")}>3x</Button>
    </div>
  )
}
