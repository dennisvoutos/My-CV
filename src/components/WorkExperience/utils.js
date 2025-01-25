export const getModalData = (clickedItem) => {
  const { title, company, startDate, endDate, details } = clickedItem;
  const modalTitle = `${title} @ ${company}`;
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
