
import CardsTop from "./CardsTop";
import AllUsers from "../Users/AllUsers";
import AllCredits from "../Credits/AllCredits";


const TablesUser = () => {
  return (
    <div className="container mx-auto">
      <CardsTop />
      <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
        <div>
          <AllUsers />
        </div>
        <div>
          <AllCredits />
        </div>
      </div>
    </div>
  );
};

export default TablesUser;
