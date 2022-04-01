import React, { createContext, useState, useContext} from 'react';

export const SelecteTrackContext = createContext();

export const SelectedTrackContextProvider = ({children}) => {
    const [selectedTracks, setSelectedTracks] = useState([]);

    return (
        <SelecteTrackContext.Provider value={{selectedTracks, setSelectedTracks}}>
            {children}
        </SelecteTrackContext.Provider>
    );
};

export const useSearchResult = () => {
    const context = useContext(SelecteTrackContext)
    return context
}
