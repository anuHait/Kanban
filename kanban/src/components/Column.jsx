import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
export default function Column({title,tasks,id}) {
  return (
    <div className='h-full flex flex-col bg-blue-400 text-gray-700'>
     <h1 className='text-lg font-semibold text-purple-700'>{title}</h1> 
     <Droppable droppableId={id}>
        {
            (provided,snapshot)=>{
                <Tasklist 
                ref={provided.innerRef} 
                {...provided.droppableProps} 
                isDraggingOver={snapshot.isDraggingOver}
                tasks={tasks}>
               {/* Provide your tasks here*/}
                {provided.placeholder}
                </Tasklist>
                
            }
        }
     </Droppable>
    </div>
  )
}
