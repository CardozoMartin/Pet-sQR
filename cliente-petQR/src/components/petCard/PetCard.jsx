import { useSession } from "../../store/useSession";
import Card from "./Card";

const PetCard = (props) => {
  const { pet } = props;
  const { user } = useSession();

  const userId = user.id;

  const filterPetId = pet.data.filter((item) => item.userID === userId);
  return (
    <div>
        <div className="mx-auto max-w-screen-xl px-4 py-8   ">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {filterPetId.map((item) => (
        
            <Card pet={item} key={item.id}></Card>
         
      ))}
       </div>
        </div>
    </div>
  );
};

export default PetCard;
