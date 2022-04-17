import ImageGallery from "react-image-gallery";

export default function ONasGaleria({ zdjecia }) {
  return (
    <div className="o-nas-galeria">
      <ImageGallery
        items={zdjecia}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        autoPlay={true}
        slideInterval={4000}
        disableSwipe={false}
      />
    </div>
  );
}
