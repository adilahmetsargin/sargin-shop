import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const data = [
        {
            title: "Title1",
            imgUrl:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
            title: "Title2",
            imgUrl:
                "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
        },
        {
            title: "Title3",
            imgUrl:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
    ];
    return (
        <div className="px-14">
            <Slider {...settings}>

                {data?.map((item: any) => (
                    <div key={item.title} className="">
                        <img
                            className="h-[650px] w-full aspect-auto object-cover"
                            src={item.imgUrl}
                            alt="furniture-img"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slick;
