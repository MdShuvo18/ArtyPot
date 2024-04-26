
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='w-full relative'>
                    <img className='w-full h-[450px]' src="https://i.ibb.co/6sDfn4c/liz99-7-Eee-SN-e-Gs-I-unsplash.jpg" alt="" />
                    <div className='absolute top-24 left-12 space-y-4'>
                        <h1 className='text-4xl text-white'>
                            We Make Thing With Love
                        </h1>
                        <p className='text-5xl font-extrabold text-white'>Hand Made Kettle's</p>
                        <p className='text-xl font-semibold text-white'>
                            Handmade kettles are a testament to artisan craftsmanship and tradition, where skilled artisans meticulously craft each piece with care and attention to detail. These kettles, lovingly formed by hand, bear the unique marks of their creators, making each one a one-of-a-kind masterpiece.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[450px] relative'>
                    <img className='w-full h-[450px]' src="https://i.ibb.co/CQKHQCD/vladimir-gladkov-d1h-KXg-FJUKw-unsplash.jpg" alt="" />
                    <div className='absolute top-24 left-12 space-y-4'>
                        <h1 className='text-4xl text-white'>
                            We Make Thing With Love
                        </h1>
                        <p className='text-5xl font-extrabold text-white'>Hand Made Ceramic's</p>
                        <p className='text-xl font-semibold text-white'>From intricately designed vases and bowls to beautifully sculpted figurines and tableware, our handmade ceramics blend artistry with functionality, making them perfect for both everyday use and special occasions.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[450px] relative'>
                    <img className='w-full h-[450px]' src="https://i.ibb.co/myZTt56/tom-crew-o-Hr-C8-V-XRU4-unsplash.jpg" alt="" />
                    <div className='absolute top-24 left-12 space-y-4'>
                        <h1 className='text-4xl text-white'>
                            We Make Thing With Love
                        </h1>
                        <p className='text-5xl font-extrabold text-white'>Hand Made Cup's</p>
                        <p className='text-xl font-semibold text-white'>Indulge in the unparalleled charm of handcrafted cups, where every sip tells a story of artisanal mastery and timeless elegance. Crafted with meticulous attention to detail and a passion for craftsmanship, each cup embodies the soulful essence of human creativity.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;