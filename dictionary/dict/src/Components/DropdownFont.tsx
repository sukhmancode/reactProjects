import React, { useState } from 'react';

const DropdownFont: React.FC = () => {
    const [selectedFont, setSelectedFont] = useState("Sans-serif");

    const handleFontChange = (font: string) => {
        setSelectedFont(font);
    };

    return (
        <div className='dropdown-fonts'>
            <ul>
                <li style={{ fontFamily: 'Sans-serif', cursor: 'pointer' }} onClick={() => handleFontChange('Sans-serif')}>Sans Serif</li>
                <li style={{ fontFamily: 'Serif', cursor: 'pointer' }} onClick={() => handleFontChange('Serif')}>Serif</li>
                <li style={{ fontFamily: 'monospace', cursor: 'pointer' }} onClick={() => handleFontChange('Monospace')}>Monospace</li>
            </ul>
        </div>
    );
};

export default DropdownFont;
