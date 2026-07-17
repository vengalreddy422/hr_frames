import React, { useState, useRef } from 'react';
import waLink from '../../utils/whatsapp';
import FRAME_SIZES from '../../data/sizes';

export default function CustomFrameBuilder() {
  const [imagePreview, setImagePreview] = useState(null);
  const [frameColor, setFrameColor] = useState('black');
  const [frameSize, setFrameSize] = useState('8 × 10 Inches');
  const [orientation, setOrientation] = useState('portrait');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFrameStyle = () => {
    switch(frameColor) {
      case 'gold': return { border: '16px solid #cfb53b', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.5)' };
      case 'brown': return { border: '16px solid #5c4033', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.5)' };
      case 'white': return { border: '16px solid #fdfdfd', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.2)' };
      case 'black': 
      default:
        return { border: '16px solid #1a1a1a', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.5)' };
    }
  };

  // Calculate size dynamics
  const getSizeProps = () => {
    let width = 300;
    let ratio = '4/5';
    
    // Approximate scaling and aspect ratio logic based on the string
    if (frameSize.includes('6 × 8')) { width = 240; ratio = '3/4'; }
    else if (frameSize.includes('8 × 10')) { width = 300; ratio = '4/5'; }
    else if (frameSize.includes('12 × 18')) { width = 360; ratio = '2/3'; }
    else if (frameSize.includes('18 × 24')) { width = 420; ratio = '3/4'; }
    else if (frameSize.includes('24 × 36')) { width = 500; ratio = '2/3'; }

    if (orientation === 'landscape') {
      const [w, h] = ratio.split('/');
      ratio = `${h}/${w}`;
      width = width * 1.3; // Make horizontal wider so height isn't tiny
    }

    return { maxWidth: width, aspectRatio: ratio };
  };

  const { maxWidth, aspectRatio } = getSizeProps();

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-3xl)', textAlign: 'center' }}>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)', maxWidth: 600, margin: '0 auto var(--space-xl)' }}>
        Upload your favorite photo to see exactly how it will look in our premium frames. 
        Once you're happy, click the button below to send us the photo on WhatsApp!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xl)' }}>
        
        {/* Frame Preview Area */}
        <div style={{ minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div 
            style={{ 
              width: '100%', 
              maxWidth: maxWidth, 
              aspectRatio: aspectRatio, 
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              ...getFrameStyle()
            }}
          >
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ) : (
              <div style={{ color: 'var(--text-tertiary)', padding: 'var(--space-md)', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>📸</span>
                Your Photo Here
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center', width: '100%', maxWidth: 500 }}>
          
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
          />
          
          <button 
            className="btn btn-secondary" 
            onClick={() => fileInputRef.current.click()}
            style={{ width: '100%', maxWidth: 300 }}
          >
            {imagePreview ? 'Change Photo' : 'Upload Photo'}
          </button>

          {imagePreview && (
            <div style={{ width: '100%', background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', marginTop: 'var(--space-sm)' }}>
              
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>Frame Color</h4>
                <div style={{ display: 'flex', gap: 15, justifyContent: 'center' }}>
                  {['black', 'gold', 'brown', 'white'].map(color => (
                    <button
                      key={color}
                      onClick={() => setFrameColor(color)}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: color === 'gold' ? '#cfb53b' : color === 'brown' ? '#5c4033' : color,
                        border: frameColor === color ? '3px solid var(--accent)' : '2px solid var(--border-color)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        transform: frameColor === color ? 'scale(1.1)' : 'scale(1)'
                      }}
                      title={`${color.charAt(0).toUpperCase() + color.slice(1)} Frame`}
                    />
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-md)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>Orientation</h4>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  <button 
                    onClick={() => setOrientation('portrait')}
                    className={`btn ${orientation === 'portrait' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  >
                    Portrait
                  </button>
                  <button 
                    onClick={() => setOrientation('landscape')}
                    className={`btn ${orientation === 'landscape' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  >
                    Landscape
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>Frame Size</h4>
                <select 
                  value={frameSize} 
                  onChange={(e) => setFrameSize(e.target.value)}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', cursor: 'pointer' }}
                >
                  {FRAME_SIZES.map((size, idx) => (
                    <option key={idx} value={size.label}>{size.label} {size.tag ? `(${size.tag})` : ''}</option>
                  ))}
                </select>
              </div>

              <a 
                href={waLink(`Hi HR Frames! I would like to order a custom frame.\n\n*Details:*\nColor: ${frameColor}\nSize: ${frameSize}\nOrientation: ${orientation}\n\nI will attach my photo shortly.`)}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gradient"
                style={{ width: '100%', display: 'inline-block', boxSizing: 'border-box' }}
              >
                Order This Custom Frame on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

