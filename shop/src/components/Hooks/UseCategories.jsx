import React, { useEffect } from "react";
import  { createApi } from 'unsplash-js'
import CATEGORIES from "../Helpers/CategoriesArray";

const unsplash = createApi({
    accessKey: 'CEN8svb8GoTrQ0LT-iM_ojNzinFhmnFRZcB8DE6xYqk',
  });

async function getState ( getStateArray ) { 
    for(let i = 0; i < CATEGORIES.length; i++) {
        let images = [];
        await unsplash.search.getPhotos({ 
            query: CATEGORIES[i].use,
            page: 1,
            perPage: 1,
            orientation: 'portrait',
        }).then(arr => { 
            images[i] = arr.response.results[0].urls.small_s3;
        }).then( () => { getStateArray[i] = images[i]} );
    }
}

const useCategories = (finalArray) => { 
    useEffect ( () => { 
        async function createCategories () { 
            let catState = [];
            await getState(catState).then(arr => {
                console.log(catState);
                for(let i = 0; i < CATEGORIES.length; i++) {
                    catState.push( { name: CATEGORIES[i].view, query:CATEGORIES[i].use, id: CATEGORIES[i].use});
                    finalArray = catState;
                }
            }).then(arr => console.log(finalArray));
        }
        createCategories();
    }, []);

    console.log(finalArray);
    return finalArray;
}

export default useCategories;