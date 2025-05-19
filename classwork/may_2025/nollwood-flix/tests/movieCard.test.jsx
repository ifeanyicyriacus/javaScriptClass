import {store} from "../src/store/store.jsx";
import {Provider} from "react-redux";
import {screen, render} from "@testing-library/react";
import {MovieCard} from "../src/reuseable/MovieCard";

const renderWithProvider = (ui) => {
    return render(<Provider store={store}>{ui}</Provider>)
}

describe("MovieCard", ()=>{
    tes
})