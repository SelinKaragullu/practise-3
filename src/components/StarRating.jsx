import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0) // false değil, 0 yaptık

    // 1. Tıklanınca kalıcı oyu (rating) kaydetsin
    function handleClick(getCurrentIndex) {
        // BURAYI DOLDUR: setRating'i kullan
    }

    // 2. Fare üstüne gelince geçici durumu (hover) kaydetsin
    function handleMouseEnter(getCurrentIndex) {
        // BURAYI DOLDUR: setHover'i kullan
    }

    // 3. Fare yıldızdan çıkınca, geçici durumu sıfırlayıp kalıcı oya geri dönsün
    function handleMouseLeave() {
        // BURAYI DOLDUR: setHover'ın içine 'rating' değerini ver
    }

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1; // Artık yıldızlarımız 1'den 5'e kadar numaralandı

                return (
                    <FaStar
                        key={index}
                        // 4. ETKİLEŞİMLERİ BAĞLA:
                        // onClick={() => ... }
                        // onMouseMove={() => ... }
                        // onMouseLeave={() => ... }
                        size={40}
                    />
                )
            })}
        </div>
    )
}