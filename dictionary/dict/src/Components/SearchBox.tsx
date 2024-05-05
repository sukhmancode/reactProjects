import React, { useEffect, useState } from 'react';

interface Words {
    word: string;
    phonetic: string;
    meanings: {
        partOfSpeech: string;
        definitions: {
            definition: string;
            synonyms: string[];
            antonyms: string[];
            example?: string;
        }[];
        synonyms: string[];
        antonyms: string[];
    }[];
}

const SearchBox: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [inputData, setInputData] = useState('');
    const [dictionaryData, setDictionaryData] = useState<Words[]>([])

    const fetchApi = async (word:string) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data: Words[] = await response.json();
            setDictionaryData(data)
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrorMessage('An error occurred while fetching data.');
        }
    };

    useEffect(() => {
        fetchApi("keyboard");
    }, []);

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        fetchApi(inputData)
    }
    return (
        <div className='center words'>
            <form className='search-input-form' tabIndex={0} onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search for any word...'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <div className='search-icon'>
                    <img src="icon-search.svg" alt="search-icon" />
                </div>
            </form>

            <div className="fetched-data">
                {dictionaryData.map((dic, index) => (
                    <div key={index} className="fetched-heading">
                        <div className="heading-play-btn">
                            <div className="heading">
                                <h1 style={{ fontSize: "64px" }}>{dic.word}</h1>
                                <p className='phonetic'>{dic.phonetic}</p>
                            </div>
                            <div className="play-btn">
                                <img src="icon-play.svg" alt="" />
                            </div>
                        </div>


                        <div className="verb-heading">
                            <h2>verb</h2>
                            <div className='verb-line'></div>
                        </div>

                        <div>
                            <h2>Meaning</h2>
                        </div>
                        <ul className='list-parent'>
                            {dic.meanings.map((mean, meanIndex) => (
                                mean.partOfSpeech === "verb" && (
                                    mean.definitions.map((definition, defIndex) => (
                                        <div key={defIndex}>
                                            <li>{definition.definition}</li>
                                            {definition.example && <p>{definition.example}</p>}
                                        </div>
                                    ))
                                )
                            ))}
                        </ul>

                        <div className="verb-heading">
                            <h2>noun</h2>
                            <div className='verb-line'></div>
                        </div>
                        
                        <div>
                            <h2>Meaning</h2>
                        </div>  
                    
                        <ul className='list-parent'>
                            {dic.meanings.map((mean, meanIndex) => (
                                mean.partOfSpeech === "noun" && (
                                    mean.definitions.map((definition, defIndex) => (
                                        <div key={defIndex}>
                                            <li>{definition.definition}</li>
                                            {definition.example && <p>{definition.example}</p>}
                                        </div>
                                    ))
                                )
                            ))}
                        </ul>

                        <div className='synomyms '>
                            <h2>Synonyms</h2>
                            {dic.meanings.map((mean, meanIndex) => (
                                mean.synonyms.map((synonym, synIndex) => (
                                    <div key={synIndex}>
                                        <h3>{synonym}</h3>
                                    </div>
                                   
                                ))
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBox;
