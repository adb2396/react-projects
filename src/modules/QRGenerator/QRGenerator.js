import { useState } from 'react';
import QRCode from 'react-qr-code';

import './styles.css';

function QRGenerator() {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleGenerateQr = () => {
    setQrCode(input);
    setInput('');
  };

  const handleInputChage = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <input
          value={input}
          onChange={handleInputChage}
          placeholder="Enter value"
        />
        <button disabled={!input.length} onClick={handleGenerateQr}>
          Generate
        </button>
      </div>
      <div>
        <QRCode value={qrCode} size={400} />
      </div>
    </div>
  );
}

export default QRGenerator;
