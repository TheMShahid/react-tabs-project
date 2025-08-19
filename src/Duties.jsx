import { FaAngleDoubleRight } from "react-icons/fa";
import { v7 as uuidv7 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv7();
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
