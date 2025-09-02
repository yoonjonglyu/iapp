import React from "react";

export interface GridViewProps {
  items: React.ReactNode[];
}

const GridView: React.FC<GridViewProps> = ({ items }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))', gap: '10px' }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default GridView;