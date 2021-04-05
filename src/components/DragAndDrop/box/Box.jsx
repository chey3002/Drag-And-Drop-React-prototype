import { memo } from "react";
const styles = {
    border: '1px solid',
    padding: '5px',
    cursor: 'move',
    borderRadius: "15px",
    color:'red'
};
export const Box = memo(function Box({  yellow, preview }) {
  const backgroundColor = yellow ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.15)";
  const boxImage="https://hubpng.com/download/52Wb3KNvVpVrNflOEAmaE7diyZj3RjGbRh9CYDKCTmaHulyXTNxWURf3FeFd9VemWqKXfLWxUO33t6bNdAlWJHHehe614NS3wabw4f6WbqxodyxpstvNsifS1GFEIt7cVqFH4BHap6FMOmKG5uG6EUkHBEvUV0PouroNUi6YxjLyS0nMQIWMg6gLtH8lhLOPGyqzfa6h/large"
    return (
      <div
        style={{ ...styles, backgroundColor }}
        role={preview ? "BoxPreview" : "Box"}
      >
        <img
          src={boxImage}
          alt="crossair"
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            // filter: "invert(100%)",
          }}
        />
      </div>
    );
});
