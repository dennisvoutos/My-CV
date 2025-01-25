export const getEducationModalData = (clickedItem) => {
  const { university, title, startDate, endDate, details } = clickedItem;
  const modalTitle = (
    <div>
      <p>{title}</p>
      <p>{university}</p>
    </div>
  );
  const modalContent = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <ul>
          {details.map((item, i) => {
            return (
              <li key={i} style={{ padding: "5px" }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          fontSize: "12px",
          margin: "20px",
        }}
      >
        {startDate} - {endDate}
      </div>
    </div>
  );
  return { modalTitle, modalContent };
};
