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
const [label, setLabel] = useState("");
  const [id, setId] = useState();
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
    setBoxes({
      ...boxes,
      [`x${Date.now()}`]: { top: 20, left: 60, title: label },
    });
  };
  useEffect(() => {
    console.log(boxes);
  }, [boxes]);
  useEffect(() => {
    dndMedic.getDnDMedic().then((value) => {
      setId(value[0].id);
      delete value[0].id;
      Object.entries(value[0]).map((val) => {
        console.log(val[0]);
      });

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
  useEffect(() => {
    console.log(label);
  },[label])
  const handleOnChange = ({target}) => {
    const { name, value } = target
    setLabel(value)
  }
  return (
    <div ref={drop} style={styles}>
      <div style={{margin:"5px"} }><input
        name="label"
        onChange={handleOnChange}
        style={{ width: "100px" }}
      />
      <button onClick={newXBox} style={{ borderRadius: "0 15px 15px 0" }}>
        agregar
      </button></div>
      
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
          position: "absolute",
          right: "5px",
          top: "5px",
        }}
        onClick={saveState}
      >
        
        Guardar
      </button>
    </div>
  );
};
