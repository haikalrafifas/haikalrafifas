'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import CardContent from '@/components/atoms/CardContent';

export default function CardCarousel({ contents }: any) {
  const centeredSlides = contents.length === 1;

  return (
    <div className="relative">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        centeredSlides={centeredSlides}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor={true}
      >
        {contents && contents.map((content: any) => (
          <SwiperSlide key={content.id} className="pb-8">
            <CardContent content={content} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
      .swiper-button-prev,
      .swiper-button-next {
        color: #e7000b; /* red-600 */
        transition: color 0.2s;
        font-size: 20px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
      }
      .swiper-button-prev:hover,
      .swiper-button-next:hover {
        color: #c10007; /* red-700 */
      }
      .swiper-pagination-bullet {
        background: #d1d5db; /* gray-300 */
        opacity: 1;
        transition: background 0.2s;
      }
      .swiper-pagination-bullet-active {
        background: #e7000b; /* red-600 */
        transition: background 0.2s;
      }
    `}</style>
    </div>
  );
}