import React, {useState} from 'react';

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

import {Card, Grid, Col, Button, TextInput, Text} from "@tremor/react";

import {PostSchema} from "../../schemas/post.schema";

export default function Create({user}) {
    const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Vulputate sapien nec sagittis aliquam malesuada bibendum. Dictum non consectetur a erat nam at lectus urna. Nisl vel pretium lectus quam id leo in. Vitae tortor condimentum lacinia quis vel eros donec ac. Magna fringilla urna porttitor rhoncus dolor. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Eget mauris pharetra et ultrices neque ornare. Congue eu consequat ac felis. Id aliquet risus feugiat in ante metus dictum. Neque sodales ut etiam sit amet nisl purus in. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.');
    const [title, setTitle] = useState('')
    const [error, setError] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    function handleSubmit() {
        PostSchema.validate({title, content}).then(async () => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer " + user.token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'title': title, 'content': content
                })
            };

            let response = await fetch('http://localhost:8080/post/create', requestOptions).catch(e => {
                setError(e.toString())
                console.log("error " + e);
                setButtonDisabled(false)
            })

            response = await response.json()
            if (response.error) {
                setButtonDisabled(false)
                return setError(response.error)
            }
            console.log(response)
            window.location.reload(true)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <Grid
            numColsLg={1}
            className="mt-6 gap-6"
        >
            <Grid
                numColsLg={5}
                className="mt-6 gap-6"
            >
                <div></div>
                <Col numColSpan={1} numColSpanLg={3}>
                    <TextInput value={title} onChange={(x) => (setTitle(x.target.value))} placeholder="Title..."/>
                </Col>
                <div></div>
            </Grid>
            <Grid
                numColsLg={5}
                className="mt-6 gap-6"
            >
                <div></div>
                <Col numColSpan={1} numColSpanLg={3}>

                    <Card>
                        <div>
                            <ReactQuill theme="snow" value={content} onChange={setContent}/>
                        </div>
                    </Card>
                </Col>
                <div></div>
            </Grid>
            <Grid
                numColsLg={5}
                className="mt-6 gap-6"
            >
                <div></div>
                <div></div>
                <Text color={"indigo"}>{error}</Text>
                <div></div>
                <div></div>
            </Grid>
            <Grid
                numColsLg={5}
                className="mt-6 gap-6"
            >
                <div></div>
                <div></div>
                <Button disabled={buttonDisabled} size="xs" onClick={() => handleSubmit()}>
                    Create Post
                </Button>
                <div></div>
                <div></div>
            </Grid>
        </Grid>
    )
}