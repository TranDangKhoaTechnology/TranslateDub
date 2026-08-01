# -*- coding: utf-8 -*-
"""Render the TranslateDub icon at multiple sizes using Pillow.
Design: blue->purple gradient rounded square, white speech bubble (translate)
with 3 audio-wave bars (dub) and 3 dots. Supersampled at 512px for crispness.
"""
import os
from PIL import Image, ImageDraw, ImageFilter

S = 512  # supersample size

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def gradient_img(size, stops):
    """stops: list of (t, (r,g,b)) sorted by t. Linear gradient along diagonal TL->BR."""
    w, h = size
    # diagonal direction
    p1 = (64, 48)
    p2 = (448, 464)
    dx = p2[0] - p1[0]
    dy = p2[1] - p1[1]
    denom = dx * dx + dy * dy
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = ((x - p1[0]) * dx + (y - p1[1]) * dy) / denom
            # find segment
            color = stops[-1][1]
            for i in range(len(stops) - 1):
                t0, c0 = stops[i]
                t1, c1 = stops[i + 1]
                if t0 <= t <= t1:
                    tt = 0 if t1 == t0 else (t - t0) / (t1 - t0)
                    color = lerp(c0, c1, tt)
                    break
            px[x, y] = color
    return img

def round_mask(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius=radius, fill=255)
    return m

def render_canvas():
    # ---- Background gradient ----
    bg_stops = [
        (0.00, (0x3B, 0x82, 0xF6)),
        (0.55, (0x25, 0x63, 0xEB)),
        (1.00, (0x7C, 0x3A, 0xED)),
    ]
    bg = gradient_img((S, S), bg_stops)
    bg = bg.convert("RGBA")
    bg.putalpha(round_mask((S, S), 112))

    # ---- Inner glow (top-left highlight) ----
    glow = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    # draw a big soft ellipse
    glow_ell = Image.new("L", (S, S), 0)
    ImageDraw.Draw(glow_ell).ellipse([30, 20, 430, 320], fill=255)
    glow_ell = glow_ell.filter(ImageFilter.GaussianBlur(60))
    glow_white = Image.new("RGBA", (S, S), (255, 255, 255, 255))
    glow.paste(glow_white, (0, 0), glow_ell)
    glow.putalpha(glow_ell.point(lambda a: int(a * 0.10)))
    bg = Image.alpha_composite(bg, glow)

    # ---- Speech bubble (white) with soft drop shadow ----
    bubble_stops = [
        (0.00, (0xFF, 0xFF, 0xFF)),
        (1.00, (0xE2, 0xE8, 0xF0)),
    ]
    # bubble gradient area (crop region for gradient)
    bubble_crop = gradient_img((S, S), bubble_stops).convert("RGBA")

    # bubble mask: rounded rect + tail
    bmask = Image.new("L", (S, S), 0)
    bd = ImageDraw.Draw(bmask)
    bd.rounded_rectangle([128, 96, 358, 298], radius=44, fill=255)
    bd.polygon([(182, 298), (221, 336), (262, 298)], fill=255)
    # smooth the mask a bit
    bmask = bmask.filter(ImageFilter.GaussianBlur(0.8))

    bubble = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    bubble.paste(bubble_crop, (0, 0), bmask)

    # shadow behind bubble
    shadow = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    sh = Image.new("L", (S, S), 0)
    sdraw = ImageDraw.Draw(sh)
    sdraw.rounded_rectangle([128, 102, 358, 308], radius=44, fill=255)
    sdraw.polygon([(182, 308), (221, 346), (262, 308)], fill=255)
    sh = sh.filter(ImageFilter.GaussianBlur(16))
    shadow.paste((30, 58, 138, 110), (0, 0), sh)
    bg = Image.alpha_composite(bg, shadow)
    bg = Image.alpha_composite(bg, bubble)

    # ---- Audio waves (3 vertical rounded bars, gradient) ----
    wave_stops = [
        (0.00, (0x3B, 0x82, 0xF6)),
        (1.00, (0x7C, 0x3A, 0xED)),
    ]
    wave_crop = gradient_img((S, S), wave_stops).convert("RGBA")
    wmask = Image.new("L", (S, S), 0)
    wd = ImageDraw.Draw(wmask)
    wd.rounded_rectangle([282, 166, 300, 228], radius=9, fill=255)
    wd.rounded_rectangle([310, 146, 328, 248], radius=9, fill=255)
    wd.rounded_rectangle([338, 126, 356, 268], radius=9, fill=255)
    waves = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    waves.paste(wave_crop, (0, 0), wmask)
    bg = Image.alpha_composite(bg, waves)

    # ---- Dots in bubble (speech marks) ----
    d = ImageDraw.Draw(bg)
    d.ellipse([174, 168, 194, 188], fill=(0x25, 0x63, 0xEB, 255))
    d.ellipse([206, 168, 226, 188], fill=(0x25, 0x63, 0xEB, 255))
    d.ellipse([238, 168, 258, 188], fill=(0x25, 0x63, 0xEB, 255))
    # small translucent accent dot
    d.ellipse([232, 206, 244, 218], fill=(0x25, 0x63, 0xEB, 90))

    return bg

def main():
    canvas = render_canvas()
    sizes = [16, 32, 48, 96, 128]
    for size in sizes:
        icon = canvas.resize((size, size), Image.LANCZOS)
        out = os.path.join(os.path.dirname(__file__), f"{size}.png")
        icon.save(out, "PNG")
        print(f"wrote {out} ({size}x{size})")

if __name__ == "__main__":
    main()
