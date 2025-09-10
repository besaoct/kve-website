import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';
import { Upload } from 'lucide-react';

const MACHINE_PRODUCT_URL = '/images/ar/1.png';
const FLOORING_PRODUCT_URL = '/images/ar/2.png';

export default function PreviewEditor() {
  const [roomImageSrc, setRoomImageSrc] = useState<string | null>(null);
  const [productSrc, setProductSrc] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<'machine' | 'flooring' | null>(null);
  const [productPosition, setProductPosition] = useState({ x: 100, y: 100, scaleX: 1, scaleY: 1, rotation: 0 });
  const [isSelected, setIsSelected] = useState(false);
  const [scaleValue, setScaleValue] = useState(50); // Slider value (0-100)
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const productRef = useRef<Konva.Image>(null);
  const roomRef = useRef<Konva.Image>(null);

  const [roomImage, roomImageStatus] = useImage(roomImageSrc || '');
  const [productImage, productImageStatus] = useImage(productSrc || '');

  const handleRoomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setRoomImageSrc(url);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setRoomImageSrc(url);
    }
  };

  const addProduct = (mode: 'machine' | 'flooring') => {
    setSelectedMode(mode);
    setProductSrc(mode === 'machine' ? MACHINE_PRODUCT_URL : FLOORING_PRODUCT_URL);
    setProductPosition({ x: 100, y: 100, scaleX: 1, scaleY: 1, rotation: 0 });
    setScaleValue(50); // Reset slider
    setIsSelected(true); // Auto-select product
  };

  const handleSelect = () => {
    if (transformerRef.current && productRef.current) {
      transformerRef.current.nodes([productRef.current]);
      transformerRef.current.getLayer()?.batchDraw();
      setIsSelected(true);
    }
  };

  const handleDeselect = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    if (e.target === stageRef.current || e.target === roomRef.current) {
      transformerRef.current?.nodes([]); // Clear transformer
      transformerRef.current?.getLayer()?.batchDraw();
      setIsSelected(false); // Deselect
    }
  };

  const handleTransform = () => {
    if (productRef.current) {
      const node = productRef.current;
      const newScale = node.scaleX(); // Assume uniform scaling
      setProductPosition({
        x: node.x(),
        y: node.y(),
        scaleX: newScale,
        scaleY: newScale,
        rotation: node.rotation(),
      });
      setScaleValue(Math.min(Math.max((newScale - 0.1) / (2.0 - 0.1) * 100, 0), 100)); // Update slider
    }
  };

  // Auto-scale product to fit room image
  useEffect(() => {
    if (productImage && roomImage && productRef.current) {
      const roomWidth = stageRef.current?.width() || 448;
      const roomHeight = stageRef.current?.height() || 384;
      const productWidth = productImage.width;
      const productHeight = productImage.height;
      const maxScale = Math.min(roomWidth / productWidth, roomHeight / productHeight) * 0.5; // Fit to 50% max
      setProductPosition((prev) => ({
        ...prev,
        scaleX: maxScale,
        scaleY: maxScale,
        x: roomWidth / 2, // Center horizontally
        y: roomHeight / 2, // Center vertically
      }));
      setScaleValue(50); // Set slider to middle
      setIsSelected(true); // Auto-select on add
      if (transformerRef.current && productRef.current) {
        transformerRef.current.nodes([productRef.current]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    }
  }, [productImage, roomImage]);

  // Handle slider change
  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setScaleValue(value);
    const newScale = 0.1 + (value / 100) * (2.0 - 0.1); // Map 0-100 to 0.1-2.0
    setProductPosition((prev) => ({
      ...prev,
      scaleX: newScale,
      scaleY: newScale,
    }));
  };

  // Reset product position and scale
  const handleReset = () => {
    if (productRef.current && stageRef.current) {
      const roomWidth = stageRef.current.width() || 448;
      const roomHeight = stageRef.current.height() || 384;
      const productWidth = productImage?.width || 100;
      const productHeight = productImage?.height || 100;
      const maxScale = Math.min(roomWidth / productWidth, roomHeight / productHeight) * 0.5;
      setProductPosition({
        x: roomWidth / 2,
        y: roomHeight / 2,
        scaleX: maxScale,
        scaleY: maxScale,
        rotation: 0,
      });
      setScaleValue(50);
      setIsSelected(true);
      if (transformerRef.current && productRef.current) {
        transformerRef.current.nodes([productRef.current]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    }
  };

  // Clear product
  const handleClearProduct = () => {
    setProductSrc(null);
    setSelectedMode(null);
    setIsSelected(false);
    transformerRef.current?.nodes([]);
    transformerRef.current?.getLayer()?.batchDraw();
  };

  // Clear room image
  const handleClearRoom = () => {
    setRoomImageSrc(null);
    setProductSrc(null);
    setSelectedMode(null);
    setIsSelected(false);
    transformerRef.current?.nodes([]);
    transformerRef.current?.getLayer()?.batchDraw();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!roomImageSrc ? (
        <div
          className="upload-box h-96"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <label className="flex flex-col items-center gap-2 text-yellow-700 text-lg cursor-pointer max-w-sm w-full text-center mx-auto">
            <Upload className="text-[#D2A564]" />
            <span className="font-normal text-neutral-800 text-sm">Drag & Drop or Click to Upload Room Image</span>
            <span className="text-sm">Supported formats: JPG, PNG</span>
            <input type="file" accept="image/*" onChange={handleRoomUpload} className="hidden" />
          </label>
        </div>
      ) : (
        <>
          <div className="border-2 border-yellow-50 rounded-sm overflow-hidden bg-white">
            <Stage
              width={window.innerWidth > 448 ? 448 : window.innerWidth - 32}
              height={384}
              onClick={handleDeselect}
              onTap={handleDeselect}
              ref={stageRef}
            >
              <Layer>
                <Image
                  image={roomImage}
                  width={stageRef.current?.width()}
                  height={stageRef.current?.height()}
                  ref={roomRef}
                  listening={false} // Ignore events on background image
                />
                {productImage && productImageStatus === 'loaded' && (
                  <Image
                    image={productImage}
                    x={productPosition.x}
                    y={productPosition.y}
                    scaleX={productPosition.scaleX}
                    scaleY={productPosition.scaleY}
                    rotation={productPosition.rotation}
                    draggable
                    onClick={handleSelect}
                    onTap={handleSelect}
                    onDragEnd={handleTransform}
                    onTransformEnd={handleTransform}
                    ref={productRef}
                  />
                )}
                <Transformer
                  ref={transformerRef}
                  boundBoxFunc={(oldBox, newBox) => {
                    if (newBox.width < 5 || newBox.height < 5) return oldBox;
                    return newBox;
                  }}
                  borderStroke="#FFD700" // Golden transformer border
                  anchorStroke="#FF0000" // Red anchors
                  anchorFill="#FFFFFF" // White anchor fill
                  enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                  rotateEnabled={true}
                />
              </Layer>
            </Stage>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            {isSelected && productSrc && (
              <div className="w-full max-w-xs">

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scaleValue}
                  onChange={handleScaleChange}
                  className="w-full accent-[#D2A564]"
                />
              </div>
            )}
            <div className="flex justify-center gap-4">
              <button
                className={`thumbnail ${selectedMode === 'machine' ? 'border-[#D2A564]' : 'border-black'}`}
                onClick={() => addProduct('machine')}
              >
                <img src={MACHINE_PRODUCT_URL} alt="Machine" className="w-full h-full object-contain" />
              </button>
              <button
                className={`thumbnail ${selectedMode === 'flooring' ? 'border-[[#D2A564]]' : 'border-black'}`}
                onClick={() => addProduct('flooring')}
              >
                <img src={FLOORING_PRODUCT_URL} alt="Flooring" className="w-full h-full object-contain" />
              </button>
            </div>
            <div className="flex justify-center gap-2">
              {productSrc && (
                <>
                  <button className="control-button" onClick={handleReset}>
                    Reset Product
                  </button>
                  <button className="control-button" onClick={handleClearProduct}>
                    Clear Product
                  </button>
                </>
              )}
              <button className="control-button" onClick={handleClearRoom}>
                Clear Space
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}