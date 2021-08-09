import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";

function Kanban(props) {
  const [labels, setLabels] = useState({
    pending: {
      id: 1,
      title: "Pending",
      deliverables: [],
    },
    inProcess: {
      id: 1,
      title: "In-Process",
      deliverables: [],
    },
    review: {
      id: 1,
      title: "Review",
      deliverables: [],
    },
    debug: {
      id: 1,
      title: "Debug",
      deliverables: [],
    },
    completed: {
      id: 1,
      title: "Completed",
      deliverables: [],
    },
  });
  return (
    <div className="mt-3">
      <DragDropContext>
        <div className="grid grid-cols-5 gap-4 place-items-center">
          {_.map(labels, (data, key) => {
            return (
              <div className="">
                <h2>{data.title}</h2>
                <Droppable droppableId={data.id}>
                  {(provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className=""
                      >
                        {data.deliverables.map((el, index) => {
                          return (
                            <Draggable key={el.id} index draggableId={el.id}>
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {props.name}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
