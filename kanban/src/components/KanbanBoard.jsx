import React from 'react'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
export default function KanbanBoard() {
    const [completed,setCompleted]=useState([]);
    const [inprogress,setInprogress]=useState([]);
  return (
    <div>
      <DragDropContext>
      <div className='flex just items-center flex-row'>
      
      </div>
      </DragDropContext>
    </div>
  )
}
