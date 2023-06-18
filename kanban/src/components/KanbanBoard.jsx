import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './Column';
import peep3 from '../assets/peep3.png';
import peep2 from '../assets/peep2.png';
import man from '../assets/man.png';
import decor from '../assets/decor.jpeg';
import xyz from '../assets/xyz.jpeg';
import flower from '../assets/flower.jpeg';
import Plant from '../assets/Plant.png';
import mood from '../assets/moodboard.png';
const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    column1: {
      id: 'column1',
      title: 'To Do',
      color: 'bg-blue-700',
      tasks: [
        { id: 'task1', title: 'Brainstorming', photo: null, content: 'Brainstorming brings team members diverse experience into play. ' ,priority:'Low',colour:'bg-orange-200 text-orange-600',contri:peep3,comm:"12",file:"0"},
        { id: 'task2', title: 'Research', photo: null, content: 'User research helps you to create an optimal product for users.' ,priority:'High',colour:'bg-red-200 text-orange-600' ,contri:peep2,comm:"10",file:"3"},
        { id: 'task3', title: 'Wireframes', photo: null, content: 'Low fidelity wireframes include the most basic content and visuals. '  ,priority:'High',colour:'bg-red-200 text-orange-600',contri:peep3,comm:"11",file:"1"},
        { id: 'task4', title: 'Prototype', photo: null, content: 'Visualize design and functionality before moving to development phase.' ,priority:'Low',colour:'bg-orange-200 text-orange-600' ,contri:peep2,comm:"4",file:"0"},

      ],
    },
    column2: {
      id: 'column2',
      title: 'On Progress',
      color: 'bg-orange-600',
      tasks: [
        { id: 'task5', title: 'Onboarding Illustrations', photo: flower, content: '',priority:'Low',colour:'bg-orange-200 text-orange-600',contri:peep3,comm:"14",file:"15"},
        { id: 'task6', title: 'Moodboard', photo: mood, content: '',priority:'Low',colour:'bg-orange-200 text-orange-600',contri: man,comm:"9",file:"10"},
        { id: 'task7', title: 'Decor', photo: null, content: 'Design, plan, select, arrange, and style to create captivating decor.',priority:'High' ,colour:'bg-red-200 text-orange-600',contri:peep2,comm:"8",file:"2"},

      ],
    },
    column3: {
      id: 'column3',
      title: 'Done',
      color: 'bg-lime-600',
      tasks: [
        { id: 'task8', title: 'Mobile App Design', photo: Plant, content: '' ,priority:'Complted',colour:'bg-green-200 text-green-500',contri:peep2,comm:"12",file:"15"},
        { id: 'task9', title: 'Design System', photo: null, content: 'It just needs to adapt the UI from what you did before ' ,priority:'Complted',colour:'bg-green-200 text-green-500',contri:peep3,comm:"12",file:"15"},
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
      <div className="flex flex-col md:flex-row justify-center p-3 ml-5">
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
