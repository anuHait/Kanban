import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ title, color, tasks = [], droppableId }) => {
  const cardCount = tasks.length;

  return (
    <div className="w-full md:w-[45%] p-8 -mt-10">
      <div className="flex gap-3 justify-start items-center bg-[#F5F5F5] rounded-lg p-3">
        <div className={`w-2 h-2 p-1 rounded-full ${color} mb-3`}></div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="bg-gray-300 w-3 h-3 rounded-full p-3 flex justify-center items-center -mt-3">
          <span className="text-gray-600 text-sm">{cardCount}</span>
        </div>
      </div>

      <div className={`w-full ${color} mb-3 h-1 rounded-md`}></div>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`bg-[#F5F5F5] p-4 rounded ${
              snapshot.isDraggingOver ? 'bg-gray-200' : ''
            }`}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task {...task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
