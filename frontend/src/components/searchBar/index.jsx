import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 8px;
`;

const SearchButton = styled.button`
    background-color: #f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    color: #959595;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:hover{
        filter: contrast(0.9);
    }
`;

export function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search"
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
    );
}