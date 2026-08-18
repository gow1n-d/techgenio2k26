import os
from PIL import Image

def process_klnce():
    img = Image.open("klnce.jpeg").convert("RGBA")
    data = img.getdata()
    new_data = []
    
    # In klnce.jpeg, the background is a checkerboard of light grays / whites around the emblem
    # The emblem itself has rich colors (gold ribbons, purple/green shield, flame).
    for item in data:
        r, g, b, a = item
        # Checkerboard / outer white detection:
        # Check if color is nearly grayscale and high brightness (checkerboard pattern)
        diff_rg = abs(r - g)
        diff_gb = abs(g - b)
        diff_rb = abs(r - b)
        avg = (r + g + b) / 3.0
        
        # Checkerboard colors in klnce.jpeg are around (200-255, 200-255, 200-255) with diff < 15
        if diff_rg < 18 and diff_gb < 18 and diff_rb < 18 and avg > 175:
            new_data.append((255, 255, 255, 0)) # transparent
        else:
            new_data.append((r, g, b, 255))
            
    img.putdata(new_data)
    img.save("klnce.png", "PNG")
    print("klnce.png created")

def process_iic():
    img = Image.open("iic.jpeg").convert("RGBA")
    width, height = img.size
    center_x, center_y = width / 2.0, height / 2.0
    # iic is a circular badge. Let's make everything outside the circular seal transparent
    radius = min(width, height) * 0.44
    
    data = img.getdata()
    new_data = []
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            dist = ((x - center_x)**2 + (y - center_y)**2)**0.5
            if dist > radius:
                new_data.append((255, 255, 255, 0))
            else:
                # Inside the circle, keep colors crisp
                new_data.append((r, g, b, 255))
                
    img.putdata(new_data)
    img.save("iic.png", "PNG")
    print("iic.png created")

def process_irp():
    img = Image.open("irp.jpeg").convert("RGBA")
    data = img.getdata()
    new_data = []
    
    # In irp.jpeg, background is pure white #ffffff
    for item in data:
        r, g, b, a = item
        # If nearly white
        if r > 235 and g > 235 and b > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, 255))
            
    img.putdata(new_data)
    img.save("irp.png", "PNG")
    print("irp.png created")

if __name__ == "__main__":
    process_klnce()
    process_iic()
    process_irp()
