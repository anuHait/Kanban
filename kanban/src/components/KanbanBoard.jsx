import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './Column';
import peep3 from '../assets/peep3.png';
import peep2 from '../assets/peep2.png';
import man from '../assets/man.jpeg';
const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    column1: {
      id: 'column1',
      title: 'To Do',
      color: 'bg-blue-700',
      tasks: [
        { id: 'task1', title: 'Brainstorming', photo: null, content: 'Brainstorming brings team members diverse experience into play. ' ,priority:'Low',colour:'bg-orange-300 text-orange-600',contri:peep3},
        { id: 'task2', title: 'Research', photo: null, content: 'User research helps you to create an optimal product for users.' ,priority:'High',colour:'bg-red-200 text-orange-600' ,contri:peep2},
        { id: 'task3', title: 'Wireframes', photo: null, content: 'Low fidelity wireframes include the most basic content and visuals. '  ,priority:'High',colour:'bg-red-200 text-orange-600',contri:peep3},
        { id: 'task4', title: 'Prototype', photo: null, content: 'Visualize design and functionality before moving to development phase.' ,priority:'Low',colour:'bg-orange-200 text-orange-600' ,contri:peep2},

      ],
    },
    column2: {
      id: 'column2',
      title: 'On Progress',
      color: 'bg-orange-600',
      tasks: [
        { id: 'task5', title: 'Onboarding Illustrations', photo: null, content: '',priority:'Low',colour:'bg-orange-300 text-orange-600',contri:peep3},
        { id: 'task6', title: 'Moodboard', photo: null, content: '',priority:'Low',colour:'bg-orange-300 text-orange-600',contri: man},
        { id: 'task7', title: 'Decor', photo: null, content: '',priority:'High' ,colour:'bg-red-200 text-orange-600',contri:peep2},

      ],
    },
    column3: {
      id: 'column3',
      title: 'Done',
      color: 'bg-lime-60,contri:0',
      tasks: [
        { id: 'task4', title: 'Task 4', photo: null, content: 'Task 4 content' ,priority:'Complted',colour:'bg-green-200 text-green-500',contri:peep2},
        { id: 'task5', title: 'Task 5', photo: null, content: 'Task 5 content' ,priority:'Complted',colour:'bg-green-200 text-green-500',contri:peep3},
      ],
    },
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTasks = Array.from(startColumn.tasks);
      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...startColumn,
          tasks: newTasks,
        },
      });
    } else {
      const startTasks = Array.from(startColumn.tasks);
      const endTasks = Array.from(endColumn.tasks);

      const [removed] = startTasks.splice(source.index, 1);
      endTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...startColumn,
          tasks: startTasks,
        },
        [destination.droppableId]: {
          ...endColumn,
          tasks: endTasks,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col md:flex-row justify-center p-8">
        {Object.values(columns).map((column) => (
          <Column
            key={column.id}
            title={column.title}
            color={column.color}
            tasks={column.tasks}
            droppableId={column.id}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
