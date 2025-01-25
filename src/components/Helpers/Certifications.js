import { certificationData } from "./constants";
export const Certifications = () => {
  return (
    <div>
      <h3 className="title">Certifications</h3>
      <hr className="line"></hr>
      <ul>
        {certificationData.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
