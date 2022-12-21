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
                          <ImgTag src={thumb} />
                          {/* {idx + 1}번째  */}
                          <div>여행지 {name}</div>
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
  border-radius: 5px;
  height: 550px;
`;

const ContentDiv = styled.div`
  background-color: #dce2e8;
  border-radius: 5px;
  height: 88px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const ImgTag = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  float: left;
  margin-left: 10px;
`;
