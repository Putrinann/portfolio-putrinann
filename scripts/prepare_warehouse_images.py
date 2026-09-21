from pathlib import Path

from PIL import Image, ImageFilter


OUTPUT_DIR = Path("public/images/projects")

IMAGES = [
    {
        "source": Path(r"C:\Users\Hewlett-Packard\OneDrive\画像\Screenshot\Screenshot 2026-09-12 001042.png"),
        "output": "warehouse-transaction-report-blurred.png",
        "regions": [
            (33, 88, 519, 222),
            (33, 317, 525, 385),
            (410, 394, 517, 417),
        ],
    },
    {
        "source": Path(r"C:\Users\Hewlett-Packard\OneDrive\画像\Screenshot\Screenshot 2026-09-12 001113.png"),
        "output": "warehouse-stocktaking-result-blurred.png",
        "regions": [
            (8, 84, 215, 112),
            (7, 146, 633, 307),
            (369, 15, 631, 43),
        ],
    },
    {
        "source": Path(r"C:\Users\Hewlett-Packard\OneDrive\画像\Screenshot\Screenshot 2026-09-12 001224.png"),
        "output": "warehouse-migration-blurred.png",
        "regions": [
            (10, 56, 576, 105),
            (10, 244, 575, 313),
            (8, 364, 576, 449),
            (20, 133, 282, 190),
            (330, 134, 571, 192),
        ],
    },
    {
        "source": Path(r"C:\Users\Hewlett-Packard\OneDrive\画像\Screenshot\Screenshot 2026-09-12 001326.png"),
        "output": "warehouse-picking-instruction-blurred.png",
        "regions": [
            (139, 75, 647, 154),
            (143, 202, 575, 384),
            (2, 334, 113, 383),
        ],
    },
]


def blur_region(image, box):
    crop = image.crop(box)
    blurred = crop.filter(ImageFilter.GaussianBlur(radius=8))
    image.paste(blurred, box)


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for item in IMAGES:
        image = Image.open(item["source"]).convert("RGB")
        for region in item["regions"]:
            blur_region(image, region)
        output_path = OUTPUT_DIR / item["output"]
        image.save(output_path)
        print(output_path)


if __name__ == "__main__":
    main()
