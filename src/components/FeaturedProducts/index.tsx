import Card from "./components/card"

const FeaturedProducts = () => {
    return (
        <div className="flex items-center my-16 flex-col">
            <span className="text-3xl text-[#0D0E43] font-bold">Featured Products</span>
            <Card />
        </div>
    )
}

export default FeaturedProducts