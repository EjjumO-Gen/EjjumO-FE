import React, { useState } from "react";
import styled from "styled-components";
import CreatePlaylistLogoSvg from "../../assets/images/createplaylist_logo.svg?react";
import DeleteButtonSvg from "../../assets/images/delete_button.svg?react";
import SearchButtonSvg from "../../assets/images/search_button.svg?react";
import { getSearchResult } from "../../apis/provider";
import SongItem from "../../components/SongItem";
import SearchSongItem from "../../components/SearchSongItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const LogoWrapper = styled.div`
    display: flex;
    margin: 32px 16px 32px 16px;
    flex-direction: row;
    justify-content: space-between;
`
const CreateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 12px 16px 12px 16px;
    max-width: 425px;
    box-sizing: border-box;
`
const CreateButton = styled.div`
    font-family: "Galmuri9";
    color: white;
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    background-color: #D9D9D9;
    border-radius: 8px;
    text-align: center;
    padding: 20px 0 20px 0;
`
const CreateInputContainer = styled.div`
    height: 60px;
    border-radius: 8px;
    margin: 0 16px 16px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #222222;
    border: 2px solid white;

    &:focus-within {
        background-color: white;
        border: 2px solid #11FFDA;
        box-shadow: 0 0px 8px rgba(17, 255, 212, 0.5);
        transition: all 0.3s;
    }
`
const CreateInput = styled.input`
    font-family: "Galmuri9";
    color: white;
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 12px;

    &:focus {
        color: black;
    }
`
const SearchResultsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 2px solid white;
    margin: 0 16px 96px 16px;
    padding-top: 16px;
    overflow-y: scroll;
`

const CreatePlaylistPage = () => {
    const [ isFocused, setIsFocused ] = useState(false);
    const [ searchParam, setSearchParam ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    
    const handleSearch = () => {
        getSearchResult({ keyword: searchParam, setData: setSearchResults });
    }

    const handleSelectSong = () => {
        
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <CreatePlaylistLogoSvg />
                <DeleteButtonSvg />
            </LogoWrapper>
            <CreateInputContainer>
                <CreateInput 
                    placeholder="제목"
                />
            </CreateInputContainer>
            <CreateInputContainer>
                <CreateInput 
                    placeholder="설명"
                />
            </CreateInputContainer>
            <CreateInputContainer>
                <CreateInput 
                    placeholder="노래를 검색해ㅂr"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearchParam(e.target.value)}
                />  
                <SearchButtonSvg style={{ marginRight: '12px' }} onClick={handleSearch} />
            </CreateInputContainer>
            {searchResults.length > 0 && (
                <SearchResultsContainer>
                    {searchResults.map((item) => (
                        <div key={item.videoId}>
                            <SearchSongItem
                                title={item.title}
                                artist={item.author}
                                thumbnail={item.thumbnail}
                                videoId={item.videoId}
                                duration={item.duration}
                            />
                        </div>
                    ))}
                </SearchResultsContainer>
            )}
            <CreateWrapper>
                <CreateButton>작성하기</CreateButton>
            </CreateWrapper>
        </Wrapper>
    );
  }
  
export default CreatePlaylistPage;