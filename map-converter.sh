#!/usr/bin

# z0 - z1 - z2 - z3 - z4 - z5 - z6 - z7
echo "Starting resizes"
convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 256x256! -crop 256x256! ./maps/celestial/256.jpg
echo "Size 256x256"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 512x512! -crop 512x512! ./maps/celestial/512.jpg
echo "Size 512x512"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 1024x1024! -crop 1024x1024! ./maps/celestial/1024.jpg
echo "Size 1024x1024"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 2048x2048! -crop 2048x2048! ./maps/celestial/2048.jpg
echo "Size 2048x2048"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 4096x4096! -crop 4096x4096! ./maps/celestial/4096.jpg
echo "Size 4096x4096"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 8192x8192! -crop 8192x8192! ./maps/celestial/8192.jpg
echo "Size 8192x8192"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 16384x16384! -crop 16384x16384! ./maps/celestial/16384.jpg
echo "Size 16384x16384"

convert ./TychoSkymapII.t5_16384x08192.jpg -brightness-contrast 15x10 -sharpen 0x9 -resize 32768x32768! -crop 32768x32768! ./maps/celestial/32768.jpg
echo "Size 32768x32768"

convert ./maps/celestial/32768.jpg -crop 2x2@ -set filename:tile "./maps/celestial/%[fx:page.x/256]-%[fx:page.y/256]-7-16k" %[filename:tile].jpg
echo "Tiles 32768x32768 x 4"

echo "--- Resizes ok ---"

echo "Starting tiles"
convert ./maps/celestial/512.jpg -crop 2x2@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-1" %[filename:tile].jpg
echo "Tiles 512x256"

convert ./maps/celestial/1024.jpg -crop 4x4@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-2" %[filename:tile].jpg
echo "Tiles 1024x256"

convert ./maps/celestial/2048.jpg -crop 8x8@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-3" %[filename:tile].jpg
echo "Tiles 2048x256"

convert ./maps/celestial/4096.jpg -crop 16x16@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-4" %[filename:tile].jpg
echo "Tiles 4096x256"

convert ./maps/celestial/8192.jpg -crop 32x32@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-5" %[filename:tile].jpg
echo "Tiles 8192x256"

convert ./maps/celestial/16384.jpg -crop 64x64@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-6" %[filename:tile].jpg
echo "Tiles 16384x256"

convert ./maps/celestial/0-0-7-16k.jpg -crop 64x64@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[fx:page.y/256]-7" %[filename:tile].jpg
echo "Tiles 16384x256 - top left"

convert ./maps/celestial/1-0-7-16k.jpg -crop 64x64@ -set filename:tile "./maps/celestial/xyz/%[(fx:page.x/256)+64]-%[fx:page.y/256]-7" %[filename:tile].jpg
echo "Tiles 16384x256 - top right"

convert ./maps/celestial/0-1-7-16k.jpg -crop 64x64@ -set filename:tile "./maps/celestial/xyz/%[fx:page.x/256]-%[(fx:page.y/256)+64]-7" %[filename:tile].jpg
echo "Tiles 16384x256 - bottom left"

convert ./maps/celestial/1-1-7-16k.jpg -crop 64x64@ -set filename:tile "./maps/celestial/xyz/%[(fx:page.x/256)+64]-%[(fx:page.y/256)+64]-7" %[filename:tile].jpg
echo "Tiles 16384x256 - bottom right"

echo "Tiles ok"