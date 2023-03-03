import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";


describe("useCategories Hook", () => {
    it("should fetch data", () => { 
        let resolve;
        const fakeFetch = (x) => { 
            return new Promise (_resolve => { 
                resolve = x;
            })
        }
        
        const useCat_Fake = jest.fn( (x) => { 
            fakeFetch(x);
        });
        useCat_Fake(4);

        expect(resolve).toBe(4);
    });

    it("should have called the functions", () => { 
        let resolve
        const fakeFetch = (x) => { 
            return new Promise (_resolve => { 
                resolve = x;
            })
        }
        
        const useCat_Fake = jest.fn( (x) => { 
            fakeFetch(x);
        });

        useCat_Fake(2);
        expect(useCat_Fake).toBeCalled();
    })

    it("should have properties", () => { 
        let resolve;
        const fakeFetch = (x) => { 
            return new Promise (_resolve => { 
                resolve = x;
            })
        }

        const object = { 
            name: "name", 
            query: "Query",
        }
        
        const useCat_Fake = jest.fn( (x) => { 
            fakeFetch(x);
        });

        useCat_Fake(object);
        expect(useCat_Fake).toBeCalled();
        expect(resolve.hasOwnProperty("name")).toBeTruthy();
        expect(resolve.hasOwnProperty("query")).toBeTruthy();
    })
})