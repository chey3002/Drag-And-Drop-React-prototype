import { memo, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Box } from "./Box";
import { Tooltip } from "reactstrap";
function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}
export const DraggableBox = memo(function DraggableBox(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const { id, title, left, top } = props;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title]
  );
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  const dragging = () => {
    setTooltipOpen(isDragging);
  }
 
  return (
    <div>
      <div
        ref={drag}
        style={getStyles(left, top, isDragging)}
        role="DraggableBox"
        id={id}
        onMouseDown={dragging}
        onMouseUp={toggle}
      >
        <Box title={title} />
      </div>
      <Tooltip
        placement="right"
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          marginLeft: "5px",
          borderRadius: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        {title}
      </Tooltip>
    </div>
  );
});
