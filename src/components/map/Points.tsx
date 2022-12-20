import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface props {
  idx: number;
  name: string;
}

const finalSpaceCharacters = [
  {
    id: "1",
    name: "강남",
    thumb: "/img/busan/busan1.jpeg",
  },
  {
    id: "2",
    name: "도봉구",
    thumb: "/img/seoul/seoul1.jpg",
  },
  {
    id: "3",
    name: "신사",
    thumb: "/img/seoul/seoul2.jpg",
  },
  {
    id: "4",
    name: "압구정",
    thumb: "/img/seoul/seoul3.jpg",
  },
  {
    id: "5",
    name: "청담",
    thumb: "/img/seoul/seoul4.jpg",
  },
  {
    id: "6",
    name: "신림",
    thumb: "/img/seoul/seoul5.jpg",
  },
];

const Points = ({ idx, name }: props) => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  // return (
  //   <div>
  //     {idx + 1}번째 여행지 {name}
  //   </div>
  // );
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided: any) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ listStyle: "none", padding: "10px" }}
          >
            {characters.map(({ id, name, thumb }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided: any) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <img
                          src={thumb}
                          style={{ width: "90px", height: "90px" }}
                        />
                        {/* {idx + 1}번째  */}
                        여행지 {name}
                      </div>
                      {/* <p>{name}</p> */}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Points;
