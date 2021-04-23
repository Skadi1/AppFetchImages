import React, { SyntheticEvent, useEffect, useState } from "react";
import { useChipsContext } from "../../context/ChipsContext";
import { useImagesContext } from "../../context/ImagesContext";
import { ChipsList } from "../ChipsList/ChipsList";
import { Input } from "../Input/Input";
import { SavedQueries } from "../SavedQueries/SavedQueries";
import './Search.css';
//
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=office coffe>; rel="first"`
export const Search: React.FC = () => {

  const { fetchImages } = useImagesContext()
  const { chips } = useChipsContext()

  const handleFetchImages = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chips.length) return

    let query = chips.map((chip: any) => chip.value).join(',')
    // console.log(query);

    fetchImages(query)

  }

  return (
    <>
      <div className="header">

        <form
          className="search"
          onSubmit={handleFetchImages}
          id="fetch-images"
        >
          <ChipsList />
          <Input />

        </form>

        <button className="search__btn-submit" type="submit" form="fetch-images">Search</button>

        <SavedQueries />
      </div>



    </>

  )
};
