import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    @media (max-width: 768px){
        width: 15rem;
        margin-bottom: 2rem;
    }
`
const Input = styled.input`
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    line-height: 2.8rem;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 2rem;
    width: 40rem;
    &:focus {
        outline: none !important;
    }
    @media (max-width: 768px){
        width: 10rem;
    }
`
const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 40px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background-color 250ms;
    margin-bottom: 2rem;
    &:hover {
        background-color: pink;
    }
`
const SearchMovies = (props) => {

    const [query, setQuery] = useState("")
    const [getResult, setGetResult] = useState([])

    const handleSubmit = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie/?query=${query}&api_key=dcb0caab506cac37c3f7dc479ca8aee2`)
        .then((res) => res.json())
        .then((json) => {
            setGetResult(json)
        })
    }
    return (
      <>
        <Form onSubmit={props.handleSearch}> 
          <Input
            type="text"
            name="text"
            placeholder="Search movie..."
            value={query}
            onChange={handleSearch}
            autoComplete="off"
          />
          <Button type="submit" >
          <i class="fas fa-search"></i>
          </Button>
        </Form>
      </>
    );
  }

  export default SearchMovies;