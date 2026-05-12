from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    png_path = Path(__file__).resolve().parents[1] / "public" / "assets" / "kiprod-logo-2026.png"
    img = Image.open(png_path).convert("RGBA")

    # Make near-black background pixels transparent.
    # This keeps the navy and gold shapes intact while removing the solid black backdrop.
    threshold = 28
    out_pixels: list[tuple[int, int, int, int]] = []
    for r, g, b, a in img.getdata():
        if r < threshold and g < threshold and b < threshold:
            out_pixels.append((r, g, b, 0))
        else:
            out_pixels.append((r, g, b, a))

    img.putdata(out_pixels)

    # Trim fully-transparent borders.
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(png_path, "PNG")
    print(f"ok: wrote {png_path} size={img.size}")


if __name__ == "__main__":
    main()

