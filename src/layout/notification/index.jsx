import React from 'react'
import styles from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
console.log(Autoplay)
const anouncements = [
    "HAPPY TET HOLIDAY, nhận ngay cơ hội giảm giá đến 50% ngay hôm nay",
    "Bộ sưu tập TET2023 vừa ra mắt, cập nhật ngay!",
    "Tiết kiệm hơn với lời khuyên từ đội ngũ nhân viên để chọn ra món quà ưng ý nhất"
];
const emblaOptions = { axis: 'y', loop: true };

export default function Notification() {
    const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay({delay: 3000})])
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSocial}>
                <a
                    href="https://www.facebook.com/profile.php?id=100009362074337"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-facebook"></i>
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
                  
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-pinterest"></i>
            </a> 
            */}
                <a
                    href="https://www.instagram.com/drdongphuong/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-instagram"></i>
                </a>

            </div>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {anouncements.map((text, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <p> {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
