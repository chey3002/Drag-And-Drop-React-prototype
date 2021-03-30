import { useCallback, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { DraggableBox } from "./DraggableBox";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import update from "immutability-helper";
import dndMedic from "./Consultas/dnd-Medic";
const styles = {
  width: 750,
  height: 750,
  border: "1px solid black",
  position: "relative",
  backgroundImage:
    "url('https://coloringhome.com/coloring/KTn/gLr/KTngLrbAc.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
export const Container = ({ snapToGrid }) => {
  const [boxes, setBoxes] = useState({});

  const [countX, setCountX] = useState(1);
  const [id, setId] = useState();
  const [countO, setCountO] = useState(1);
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }
        moveBox(item.id, left, top);
        console.log(item.id, left, top);
        if (left > styles.width - 90 && top > styles.width - 100) {
          delete boxes[`${item.id}`];
          console.log(boxes);
          setBoxes(boxes);
        }
        return undefined;
      },
    }),
    [moveBox]
  );
  const newXBox = () => {
    setCountX(countX + 1);
    setBoxes({
      ...boxes,
      [`x${countX}`]: { top: 20, left: 60, title: "X" },
    });
  };

  const newOBox = () => {
    setCountO(countO + 1);
    setBoxes({
      ...boxes,
      [`o${countO}`]: { top: 60, left: 60, title: "O" },
    });
  };
  useEffect(() => {
    console.log(boxes);
  }, [boxes, countO, countX]);
  useEffect(() => {
    dndMedic.getDnDMedic().then((value) => {
      setId(value[0].id);
      delete value[0].id;
      let co = 0;
      let cx = 0;

      Object.entries(value[0]).map((val) => {
        console.log(val[0]);
        const textVal = val[0].match(/[a-zA-Z]+/g);
        switch (textVal[0]) {
          case "o":
            co++;
            break;
          case "x":
            cx++;
            break;
        }
      });
      setCountO(co + 1);
      setCountX(cx + 1);
      console.log(co, cx);

      setBoxes({ ...value[0] });
    });
  }, []);
  useEffect(() => {
    console.log(id);
  }, [id]);
  const saveState = () => {
    const wID = { ...boxes, id: id };
    dndMedic.editDnDMedic(wID);
  };
  return (
    <div ref={drop} style={styles}>
      <button onClick={newXBox}>X+</button>
      <button onClick={newOBox}>O+</button>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
      <div
        style={{
          background:
            "url('https://cdn1.iconfinder.com/data/icons/symbol-set-1/100/Untitled-2-50-512.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "50px",
          width: "50px",
          position: "absolute",
          right: "0",
          bottom: "0",
        }}
      ></div>
      <button
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          position: "absolute",
          right: "0",
          top: "0",
        }}
        onClick={saveState}
      >
        Save
      </button>
    </div>
  );
};
