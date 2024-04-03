import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
import Feedback from "./Feedback/Feedback";
import Iphone from "./Iphone/Iphone";

const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            {/* <Category></Category> */}
            <Iphone></Iphone>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;