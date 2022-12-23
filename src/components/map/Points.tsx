import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { pointTest } from "store/map/mapReducer";
import { TourList } from "store/map/mapType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";

interface props {
  markers: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
}

const Points = ({ markers }: props) => {
  const data = useSelector((state: RootState) => state.map.selectedTourList);

  const points = useSelector((state: RootState) => state.map.selectedPoints);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(data);
    console.log("items", items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    // const [reorderedItem2] = items.splice(result.source.index, -1);
    console.log("reordereditems", reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(pointTest(items));
  };

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
              {data.map(({ id, city, lat, lng, img }, index) => {
                return (
                  <Draggable key={id} draggableId={String(id)} index={index}>
                    {(provided) => {
                      return (
                        <li
                          style={{ width: "100%" }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {index === 0 ? (
                            <ContentDiv style={{ backgroundColor: "red" }}>
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
                          ) : (
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
                          )}
                        </li>
                      );
                    }}
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
