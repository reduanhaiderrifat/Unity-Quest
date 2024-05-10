import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>this update page {id}</h2>
    </div>
  );
};

export default Update;
