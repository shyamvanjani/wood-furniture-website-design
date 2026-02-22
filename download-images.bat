@echo off
echo ========================================
echo   Downloading all images...
echo ========================================
echo.

mkdir "public\images" 2>nul

curl -sL "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" -o "public\images\hero-living-room.jpg"
echo [1/28] hero-living-room.jpg

curl -sL "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80" -o "public\images\hero-bedroom.jpg"
echo [2/28] hero-bedroom.jpg

curl -sL "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=80" -o "public\images\hero-dining.jpg"
echo [3/28] hero-dining.jpg

curl -sL "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80" -o "public\images\about-workshop.jpg"
echo [4/28] about-workshop.jpg

curl -sL "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" -o "public\images\about-detail.jpg"
echo [5/28] about-detail.jpg

curl -sL "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80" -o "public\images\feature-artisan.jpg"
echo [6/28] feature-artisan.jpg

curl -sL "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&q=80" -o "public\images\feature-wood.jpg"
echo [7/28] feature-wood.jpg

curl -sL "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" -o "public\images\feature-custom.jpg"
echo [8/28] feature-custom.jpg

curl -sL "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" -o "public\images\feature-warranty.jpg"
echo [9/28] feature-warranty.jpg

curl -sL "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=80" -o "public\images\room-living.jpg"
echo [10/28] room-living.jpg

curl -sL "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80" -o "public\images\room-bedroom.jpg"
echo [11/28] room-bedroom.jpg

curl -sL "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1400&q=80" -o "public\images\room-dining.jpg"
echo [12/28] room-dining.jpg

curl -sL "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80" -o "public\images\room-kitchen.jpg"
echo [13/28] room-kitchen.jpg

curl -sL "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" -o "public\images\process-consultation.jpg"
echo [14/28] process-consultation.jpg

curl -sL "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" -o "public\images\process-design.jpg"
echo [15/28] process-design.jpg

curl -sL "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80" -o "public\images\process-crafting.jpg"
echo [16/28] process-crafting.jpg

curl -sL "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80" -o "public\images\process-delivery.jpg"
echo [17/28] process-delivery.jpg

curl -sL "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" -o "public\images\dining-1.png"
echo [18/28] dining-1.png

curl -sL "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80" -o "public\images\bedroom-1.png"
echo [19/28] bedroom-1.png

curl -sL "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80" -o "public\images\living-room-1.png"
echo [20/28] living-room-1.png

curl -sL "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" -o "public\images\gallery-1.jpg"
echo [21/28] gallery-1.jpg

curl -sL "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80" -o "public\images\gallery-2.jpg"
echo [22/28] gallery-2.jpg

curl -sL "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" -o "public\images\gallery-3.jpg"
echo [23/28] gallery-3.jpg

curl -sL "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80" -o "public\images\gallery-4.jpg"
echo [24/28] gallery-4.jpg

curl -sL "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80" -o "public\images\gallery-5.jpg"
echo [25/28] gallery-5.jpg

curl -sL "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80" -o "public\images\gallery-6.jpg"
echo [26/28] gallery-6.jpg

curl -sL "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80" -o "public\images\cta-workshop.jpg"
echo [27/28] cta-workshop.jpg

curl -sL "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80" -o "public\images\float-chair.png"
echo [28/28] float-chair.png

curl -sL "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&q=80" -o "public\images\float-lamp.png"
echo [28/28] float-lamp.png

echo.
echo ========================================
echo   All 28 images downloaded!
echo   Saved to: public\images\
echo ========================================
pause