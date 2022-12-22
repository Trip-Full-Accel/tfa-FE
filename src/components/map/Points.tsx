import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { TourList } from "store/map/mapType";
import { RootState } from "store/store";
import styled from "styled-components";

interface props {
  markers: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
}

const finalSpaceCharacters = [
  {
    id: "1",
    name: "강남",
    thumb: "/img/busan/busan1.jpeg",
  },
];

const Points = ({ markers }: props) => {
  const result1 = useSelector((state: RootState) => state.map.selectedTourList);
  // console.log(result1);
  const [selected, setSelected] = useState<any>();

  const handleChange = (result: DropResult) => {
    if (!result.destination) return;

    const items = [...result1];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSelected(items);
  };
  const deleteSelect = () => {
    const result = [];
    console.log("동작함");
  };
  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="selected">
        {(provided: any) => (
          <ListDiv>
            <ul
              className="selected"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {result1.map(({ id, city, lat, lng, img }, index) => {
                return (
                  <Draggable key={city} draggableId={city} index={Number(id)}>
                    {(provided: any) => (
                      <li
                        style={{ width: "100%" }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ContentDiv>
                          <img
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "50px",
                              float: "left",
                              marginLeft: "10px",
                            }}
                            src={`${img}`}
                          />
                          {/* {index + 1} */}
                          {city}
                        </ContentDiv>
                        <i
                          className="xi-caret-down-min xi-x"
                          onClick={deleteSelect}
                        ></i>
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
