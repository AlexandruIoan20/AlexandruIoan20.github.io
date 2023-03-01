import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from "../components/Item";
import ItemList from "../components/ItemList"
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategotyList";

describe("Plain components", () => { 
    it("renders Item", () => { 
        const { container } = render(<Item/>);
        expect(container).toMatchSnapshot();
    });

    it("renders an item in an item list", () => { 
        const { container } = render(<ItemList/>)
        expect (container).toMatchSnapshot();
    }); 

    it("renders the searchbar", () => { 
        const { container } = render(<SearchBar />);
        expect(container).toMatchSnapshot();
    })

    it("renders the navbar", () => { 
        const { container } = render(<NavBar />);
        expect (container).toMatchSnapshot();
    });

    it("renders category list", () => { 
        const {container } = render(<CategoryList /> );
        expect(container).toMatchSnapshot();
    })
})