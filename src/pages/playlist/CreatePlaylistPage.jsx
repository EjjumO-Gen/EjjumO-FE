import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreatePlaylistLogoSvg from "../../assets/images/createplaylist_logo.svg?react";
import DeleteButtonSvg from "../../assets/images/delete_button.svg?react";
import SearchButtonSvg from "../../assets/images/search_button.svg?react";
import { getSearchResult } from "../../apis/provider";

import SearchSongItem from "../../components/SearchSongItem";
import SelectedSongItem from "../../components/SelectedSongItem";
import { useNavigate } from "react-router-dom";
import { postPlaylist } from "../../apis/playlist";

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
const CreateButton = styled.button`
    font-family: "Galmuri9";
    color: #222222;
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    background-color: #11FFDA;
    border-radius: 8px;
    text-align: center;
    padding: 20px 0 20px 0;
`
const DisabledCreateButton = styled.div`
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
    padding: 16px 16px 0 16px;
    overflow-y: scroll;
`

const SelectedSongContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
`

const CreatePlaylistPage = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [searchParam, setSearchParam] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);

    const formData = {
        "playlist": {
            "userId": 3,
            "playlistName": title,
            "description": description,
        },
        "songs": selectedSongs.map((item) => {
            return {
                "title": item.title,
                "artist": item.author,
                "videoId": item.videoId,
                "thumbnail": item.thumbnail,
                "duration": item.duration,
            }
        })
    }

    const handleSearch = () => {
        getSearchResult({ keyword: searchParam, setData: setSearchResults });
    }

    const handleSelectSong = (item) => {
        const temp = selectedSongs.filter((song) => song.videoId !== item.videoId)
        setSelectedSongs([...temp, item]);
    }

    const handleRemoveSong = (item) => {
        const temp = selectedSongs.filter((song) => song.videoId !== item.videoId)
        setSelectedSongs(temp);
    }

    const handleSubmit = async () => {
        const playlistId = await postPlaylist({formData: formData});
        navigate(`/playlist/${playlistId}`);
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
                    onChange={(e) => setTitle(e.target.value)}
                />
            </CreateInputContainer>

            <CreateInputContainer>
                <CreateInput 
                    placeholder="설명"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </CreateInputContainer>

            {selectedSongs.length > 0 && 
                selectedSongs.map((item) => (
                    <SelectedSongContainer key={item.videoId}>
                        <SelectedSongItem
                            title={item.title}
                            artist={item.author}
                            thumbnail={item.thumbnail}
                            duration={item.duration}
                            onClick={() => handleRemoveSong(item)}
                        />
                    </SelectedSongContainer>
                ))
            }

            <CreateInputContainer>
                <CreateInput 
                    placeholder="노래를 검색해ㅂr"
                    onChange={(e) => setSearchParam(e.target.value)}
                />  
                <SearchButtonSvg style={{ marginRight: '12px' }} onClick={handleSearch} />
            </CreateInputContainer>

            {searchResults.length > 0 && (
                <SearchResultsContainer>
                    {searchResults.map((item) => (
                        <div key={item.videoId} onClick={() => handleSelectSong(item)} >
                            <SearchSongItem
                                title={item.title}
                                artist={item.author}
                                thumbnail={item.thumbnail}
                                duration={item.duration}
                            />
                        </div>
                    ))}
                </SearchResultsContainer>
            )}

            <CreateWrapper>
                {title && description && selectedSongs.length > 0 ? (
                    <CreateButton onClick={handleSubmit}>작성하기</CreateButton>
                ) : (
                    <DisabledCreateButton>작성하기</DisabledCreateButton>
                )}
            </CreateWrapper>
        </Wrapper>
    );
  }
  
export default CreatePlaylistPage;