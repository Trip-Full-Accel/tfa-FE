import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

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
          <ListDiv>
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {characters.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided: any) => (
                      <li
                        style={{ width: "100%" }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ContentDiv>
                          <img
                            src={thumb}
                            style={{
                              width: "89px",
                              height: "89px",
                              borderRadius: "5px 0 0 5px",
                              float: "left",
                              margin: 0,
                            }}
                          />
                          {/* {idx + 1}번째  */}
                          여행지 {name}
                        </ContentDiv>
                        {/* <p>{name}</p> */}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          </ListDiv>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Points;

const ListDiv = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 550px;
`;

const ContentDiv = styled.div`
  border: 1px solid black;
  background-color: #eaeaea;
  border-radius: 5px;
  height: 91px;
  display: flex;
  align-items: center;
`;
