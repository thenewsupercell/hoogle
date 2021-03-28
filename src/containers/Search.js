import React, {useState} from 'react';
//const serp = require("serp");

const Search = () => {
    const [url, setUrl] = useState("");

    return (
        <>
            <div class="container-fluid text-center pt-3 outbox">
                <div class='row'>
                    <div class='col-lg-8 col-md-10 col-sm-11 mx-auto'>
                        <form class='order-1 d-flex flex-sm-row flex-column align-items-center' action="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <input type="text" class='border-0 form-control h-100 mt-2 mt-sm-0' defaultValue={url} onChange={e => setUrl(e.target.value)}/>
                        </form>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer noopener"><button class='btn btn-primary mr-sm-1 mt-4 mt-sm-0 flex-fill'>Search</button></a>
                <h1>w{url}</h1>
            </div>
        </>
    )
}

export default Search;