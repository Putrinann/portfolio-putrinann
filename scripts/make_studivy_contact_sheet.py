from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


BASE_DIR = Path(r"C:\Users\Hewlett-Packard\OneDrive\画像\Screenshot")
OUTPUT_PATH = Path("public/images/projects/studivy-candidates.jpg")
FILES = [
    "Screenshot 2026-09-11 050425.png",
    "Screenshot 2026-09-11 050805.png",
    "Screenshot 2026-09-11 051026.png",
    "Screenshot 2026-09-11 051201.png",
    "Screenshot 2026-09-11 062718.png",
    "Screenshot 2026-09-11 063321.png",
    "Screenshot 2026-09-11 071623.png",
    "Screenshot 2026-09-11 072429.png",
    "Screenshot 2026-09-11 074537.png",
]


def main():
    paths = [BASE_DIR / name for name in FILES if (BASE_DIR / name).exists()]
    thumb_width = 300
    thumb_height = 190
    label_height = 28
    columns = 2
    rows = (len(paths) + columns - 1) // columns

    sheet = Image.new("RGB", (thumb_width * columns, (thumb_height + label_height) * rows), (26, 36, 31))
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, path in enumerate(paths):
        image = Image.open(path).convert("RGB")
        image.thumbnail((thumb_width, thumb_height))
        x = (index % columns) * thumb_width
        y = (index // columns) * (thumb_height + label_height)
        sheet.paste(image, (x + (thumb_width - image.width) // 2, y))
        draw.text((x + 6, y + thumb_height + 4), path.name, fill=(246, 247, 245), font=font)

    sheet.save(OUTPUT_PATH)
    print(f"saved {OUTPUT_PATH} with {len(paths)} files")


if __name__ == "__main__":
    main()
