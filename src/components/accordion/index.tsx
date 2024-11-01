import { useState } from "react";
import { data } from "./data";
import './styles.css'

export const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSingleSection = (getCurrentId: number) => setSelected(selected === getCurrentId ? null : getCurrentId);
  

  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id} className="item">
            <div onClick={() => handleSingleSection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>{selected === dataItem.id ? "-" : "+"}</span>
            </div>
            {selected === dataItem.id && (
              <div className="content">
                <p>{dataItem.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};
