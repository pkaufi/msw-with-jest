import React from 'react'
import axios from "axios";
import {server} from "../src/mocks/server";
import {rest} from "msw";

const upload = () => {
    return axios
        .post(
            "/upload",
            new FormData(),
            {onUploadProgress: jest.fn()}
        )
}

it('fails', done => {
    server.use(rest.post("/upload", (req, res, ctx) => res(ctx.status(200))));

    upload().then(() => {
        expect(true).toBeTruthy();
        done();
    }).catch(e => {
        done(e);
    });
})