import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import EidDeals from "./EidDeals/EidDeals";
// import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import Feedback from "./Feedback/Feedback";
import Iphone from "./Iphone/Iphone";
import Items from "./Items/Items";

const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Items></Items>
            {/* <FeaturedCategories></FeaturedCategories> */}
            <Category></Category>
            <Iphone></Iphone>
            <EidDeals></EidDeals>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;