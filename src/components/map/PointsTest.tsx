import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { TourList } from "store/map/mapType";
import styled from "styled-components";
interface props {
  markers: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
}
function PointsTest({ markers }: props) {
  const data = useSelector((state: RootState) => state.map.selectedTourList);
  const [selected, setSelected] = useState<TourList[]>(data);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(selected);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSelected(items);
  }
  //   useEffect(() => {}, [selected]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ListDiv>
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {selected.map(({ id, name, lat, lng, img }, index) => {
                return (
                  <Draggable key={id} draggableId={String(id)} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ContentDiv>
                          <ImgTag src={`${img}`} />
                          {/* {index + 1} */}
                          {name}
                        </ContentDiv>
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
}

export default PointsTest;
const ListDiv = styled.div`
  border-radius: 5px;
  height: 550px;
`;

const ContentDiv = styled.div`
  /* background-color: #dce2e8; */
  background-color: #fafafa;
  border-radius: 5px;
  height: 88px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  box-shadow: 10px 10px 10px gray;
`;

const ImgTag = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  float: left;
  margin-left: 10px;
`;
