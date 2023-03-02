import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from "../components/Item";
import ItemList from "../components/ItemList"
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategoryList";
import ItemListElement from "../components/ItemListElement";
import Cart from "../components/Cart";
import CartElement from "../components/CartElement";
import NotFound from "../components/NotFound";

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
    });

    it("renders item list element", () => { 
        const { container } = render(<ItemListElement />);
        expect(container).toMatchSnapshot();
    });

    it("renders cart element", () => { 
        const { container } = render(<CartElement />);
        expect(container).toMatchSnapshot();
    })
    
    it("renders the card", () => { 
        const { container } = render(<Cart/>);
        expect(container).toMatchSnapshot();
    });

    it("render not found", () => { 
        const { container } = render(<NotFound/>);
        expect(container).toMatchSnapshot();
    })
})