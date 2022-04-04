import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "./CununieCivila.scss";

const CununieCivila = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="cununie-civila-page">
      <div className="main-container">
        <div className="text-center">
          <h2 className="font-size-64 gotham-bold custom-line-height py-4">
            Cununie Civila
          </h2>
          <p className="font-size-24 custom-line-height pb-5">
            „Casatoria, inceputul calatoriei voastre!”
          </p>
        </div>

        <Gallery
          margin={10}
          photos={photos}
          onClick={openLightbox}
          imagePadding={200}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};

export default CununieCivila;
